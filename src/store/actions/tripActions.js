import instance from "./instance";
import * as types from "../types";

export const tripCreate = (trip) => async (dispatch) => {
  try {
    const res = await instance.post(`/trip`, trip);
    localStorage.setItem("activeTrip", JSON.stringify(res.data));
    dispatch({
      type: types.SET_TRIP,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const fetchActivities = (activites) => async (dispatch) => {
  try {
    const res = await instance.put(`/trip/activities`, activites);
    dispatch({
      type: types.SET_TRIP_ACTIVITIES,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const addActivity = (activity) => async (dispatch) => {
  try {
    const res = await instance.post(`/trip/activities`, activity);
    dispatch({
      type: types.ADD_ACTIVITY,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const deleteActivity = (activity) => async (dispatch) => {
  try {
    await instance.delete(`/trip/activity`, activity);
    dispatch({
      type: types.DELETE_ACTIVITY,
      payload: activity.activityId,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const deleteTrip = (tripId, history) => async (dispatch) => {
  try {
    const res = await instance.delete(`/trips/${tripId}`);
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
    const res = await instance.put(`/trip/itinerary`, tripId);
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
