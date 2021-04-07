import instance from "./instance";
import decode from "jwt-decode";
import Cookies from "js-cookie";
import * as types from "../types";

const assignTrip = async (dispatch) => {
  try {
    const trip = JSON.parse(localStorage.getItem("activeTrip"));
    if (trip) {
      const res = await instance.put(`/trips/${trip.id}`);
      await localStorage.setItem("activeTrip", JSON.stringify(res.data));
      await dispatch({
        type: types.SET_TRIP,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

const setUser = (token) => {
  Cookies.set("token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  assignTrip();
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
      const trip = JSON.parse(localStorage.getItem("activeTrip"));
      trip ? history.replace("/explore") : history.replace("/home");
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
      const trip = JSON.parse(localStorage.getItem("activeTrip"));
      trip ? history.replace("/explore") : history.replace("/home");
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

export const signout = () => {
  Cookies.remove("token");
  delete instance.defaults.headers.common.Authorization;
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
    console.log("fetched reviews", res.data);
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
