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

export const addActivity = (activity) => ({
  type: types.ADD_ACTIVITY,
  payload: activity,
});

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

export const addToItinerary = (activity) => async (dispatch) => {
  try {
    const res = await instance.post(`/trip/activities`, activity);
    dispatch({
      type: types.ADD_TO_ITINERARY,
      payload: res.data,
    });
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
