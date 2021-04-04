import React from "react";
import instance from "./instance";
import Cookies from "js-cookie";
import * as types from "../types";

export const createTrip = (trip) => async (dispatch) => {
  try {
    await localStorage.removeItem("myActivities");
    await dispatch({
      type: types.SET_TRIP_ACTIVITIES,
      payload: [],
    });
    const res = await instance.post("/trips", trip);
    await localStorage.setItem("activeTrip", JSON.stringify(res.data));
    await dispatch(fetchItinerary(res.data.id));
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
      JSON.stringify({ ...trip, userId: res.data })
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

export const addActivity = (activity, addToast) => async (dispatch) => {
  try {
    const { dayId, tripId } = activity;
    const res = await instance.post(
      `/trips/${tripId}/days/${dayId}/activities`,
      activity
    );
    dispatch({
      type: types.SET_ITINERARY,
      payload: res.data,
    });
  } catch (error) {
    if (error.response.status === 401) Alert(addToast);
    console.log("Error:", error);
  }
};

export const updateActivity = (currActivity, newActivity, addToast) => async (
  dispatch
) => {
  try {
    const { dayId, activityId } = currActivity;
    const tripId = JSON.parse(localStorage.getItem("activeTrip")).id;
    const res = await instance.put(
      `/trips/${tripId}/days/${dayId}/activities/${activityId}`,
      newActivity
    );
    dispatch({
      type: types.SET_ITINERARY,
      payload: res.data,
    });
  } catch (error) {
    if (error.response.status === 401) Alert(addToast);
    console.log("Error:", error);
  }
};

export const deleteActivity = (activity, addToast) => async (dispatch) => {
  try {
    const { dayId, activityId } = activity;
    const tripId = JSON.parse(localStorage.getItem("activeTrip")).id;
    const res = await instance.delete(
      `/trips/${tripId}/days/${dayId}/activities/${activityId}`
    );
    dispatch({
      type: types.SET_ITINERARY,
      payload: res.data,
    });
  } catch (error) {
    if (error.response.status === 401) Alert(addToast);
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

// Unauthorized prompt
const Alert = (addToast) =>
  addToast(`Please sign in to make changes to this trip.`, {
    appearance: `warning`,
    autoDismiss: true,
  });
