import instance from "./instance";
import * as types from "../types";
import Cookies from "js-cookie";

export const createTrip = (trip) => async (dispatch) => {
  try {
    await localStorage.removeItem("myActivities");
    const res = await instance.post("/trips", trip);
    await localStorage.setItem("activeTrip", JSON.stringify(res.data));
    dispatch({
      type: types.SET_TRIP,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const addUser = () => async (dispatch) => {
  try {
    const token = Cookies.get("token");
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    const trip = await JSON.parse(localStorage.getItem("activeTrip"));
    const res = await instance.put(`/trips/${trip.id}`);
    await localStorage.setItem(
      "activeTrip",
      JSON.stringify({ ...trip, userId: res })
    );
    await dispatch({
      type: types.SET_TRIP,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const fetchActivities = (activities) => ({
  type: types.SET_TRIP_ACTIVITIES,
  payload: activities,
});

export const addActivity = (activity) => async (dispatch) => {
  try {
    const { dayId, tripId } = activity;
    const token = Cookies.get("token");
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    const res = await instance.post(
      `/trips/${tripId}/days/${dayId}/activities`,
      activity
    );
    dispatch({
      type: types.SET_ITINERARY,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const updateActivity = (currActivity, newActivity) => async (
  dispatch
) => {
  try {
    const { dayId, activityId } = currActivity;
    const tripId = JSON.parse(localStorage.getItem("activeTrip")).id;
    const res = await instance.put(
      `/trips/${tripId}/days/${dayId}/activitites/${activityId}`,
      newActivity
    );
    dispatch({
      type: types.SET_ITINERARY,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const deleteActivity = (activity) => async (dispatch) => {
  try {
    const { dayId, activityId } = activity;
    const tripId = JSON.parse(localStorage.getItem("activeTrip")).id;
    const res = await instance.delete(
      `/trips/${tripId}/days/${dayId}/activitites/${activityId}`
    );
    dispatch({
      type: types.SET_ITINERARY,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const deleteTrip = (tripId, history) => async (dispatch) => {
  try {
    await instance.delete(`/trips/${tripId}`);
    history.go("/history");
    // dispatch({
    //   type: types.SET_TRIP,
    //   payload: res.data,
    // });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const fetchItinerary = (tripId) => async (dispatch) => {
  try {
    const res = await instance.get(`/trips/${tripId}/itinerary`);
    dispatch({
      type: types.SET_ITINERARY,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
export const handleActivity = (activity) => ({
  type: types.HANDLE_ACTIVITY,
  payload: activity,
});
