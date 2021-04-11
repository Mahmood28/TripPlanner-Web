import instance from "./instance";
import decode from "jwt-decode";
import Cookies from "js-cookie";
import * as types from "../types";

const assignTrip = async () => {
  try {
    const trip = JSON.parse(localStorage.getItem("activeTrip"));
    if (trip) {
      if (!trip.userId) {
        const res = await instance.put(`/trips/${trip.id}`);
        await localStorage.setItem("activeTrip", JSON.stringify(res.data));
        return {
          type: types.SET_TRIP,
          payload: res.data,
        };
      }
    }
    return {
      type: types.SET_TRIP,
      payload: trip ?? {},
    };
  } catch (error) {
    console.error(error);
  }
};

const setUser = (token) => {
  Cookies.set("token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      await dispatch(setUser(res.data.token));
      await dispatch(await assignTrip());
      const trip = JSON.parse(localStorage.getItem("activeTrip"));
      trip ? history.replace("/explore") : history.replace("/");
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      await dispatch(setUser(res.data.token));
      await dispatch(await assignTrip());
      const trip = JSON.parse(localStorage.getItem("activeTrip"));
      trip ? history.replace("/explore") : history.replace("/");
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

export const signout = () => {
  Cookies.remove("token");
  delete instance.defaults.headers.common.Authorization;
  localStorage.removeItem("activeTrip");
  localStorage.removeItem("myActivities");
  localStorage.removeItem("directions");
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const checkForToken = () => (dispatch) => {
  const token = Cookies.get("token");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime < user.exp) {
      dispatch(setUser(token));
    } else {
      dispatch(signout());
    }
  }
};

export const updateProfile = (userData) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const Key in userData) formData.append(Key, userData[Key]);
      const res = await instance.put("/profile", formData);
      await dispatch(setUser(res.data.token));
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

export const fetchHistory = () => async (dispatch) => {
  try {
    const res = await instance.get("/trips");
    dispatch({
      type: types.FETCH_HISTORY,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const fetchReviews = () => async (dispatch) => {
  try {
    const res = await instance.get("/reviews");
    dispatch({
      type: types.FETCH_REVIEWS,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const deleteTrip = (tripId) => async (dispatch) => {
  try {
    await instance.delete(`/trips/${tripId}`);
    dispatch({
      type: types.DELETE_TRIP,
      payload: tripId,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const deleteReview = (review) => async (dispatch) => {
  try {
    await instance.delete(`/reviews/${review.id}`);
    dispatch({
      type: types.DELETE_REVIEW,
      payload: review,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const updateReview = (reviewId, newReview, destinationId) => async (
  dispatch
) => {
  try {
    const reviewRes = await instance.put(`/reviews/${reviewId}`, newReview);
    dispatch({
      type: types.UPDATE_REVIEW,
      payload: reviewRes.data,
    });

    const activitiesRes = await instance.get(
      `/destinations/${destinationId}/activities`
    );
    dispatch({
      type: types.SET_ACTIVITIES,
      payload: activitiesRes.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const handleFavourite = (activity, favourite) => async (dispatch) => {
  try {
    !favourite
      ? await instance.post(`/activities/${activity.id}/favourites`)
      : await instance.delete(`/activities/${activity.id}/favourites`);
    dispatch({
      type: types.HANDLE_FAVOURITE,
      payload: activity,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const fetchFavourites = () => async (dispatch) => {
  try {
    const res = await instance.get("/activities/favourites");
    dispatch({
      type: types.SET_FAVOURITES,
      payload: res.data.Activities,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
