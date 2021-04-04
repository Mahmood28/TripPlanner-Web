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
      history.replace("/");
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
      history.replace("/");
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
    dispatch({ type: types.FETCH_HISTORY, payload: res.data });
  } catch (error) {
    console.log("Error: ", error);
  }
};
export const fetchReviews = () => async (dispatch) => {
  try {
    const res = await instance.get("/reviews");
    dispatch({ type: types.FETH_REVIEWS, payload: res.data });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const deleteTrip = (tripId, history) => async (dispatch) => {
  try {
    await instance.delete(`/trips/${tripId}`);
    history.replace("/history");
    dispatch({
      type: types.DELETE_TRIP,
      payload: tripId,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const deleteReview = (review, history) => async (dispatch) => {
  try {
    await instance.delete(`/reviews/${review.id}`);
    // history.replace("/profile");
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
    const updatedReview = await instance.put(`/reviews/${reviewId}`, newReview);
    dispatch({
      type: types.UPDATE_REVIEW,
      payload: updatedReview.data,
    });

    const activities = await instance.get(
      `/destinations/${destinationId}/activities`
    );
    dispatch({
      type: types.SET_ACTIVITIES,
      payload: activities.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

const assignTrip = async (tripId) => {
  const res = await instance.put(`/trips/${tripId}`);
  localStorage.setItem("activeTrip", JSON.stringify(res.data));
};