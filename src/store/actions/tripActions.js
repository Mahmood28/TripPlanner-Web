import instance from "./instance";
import * as types from "../types";

export const tripCreate = (trip) => async (dispatch) => {
  try {
    const res = await instance.post(`/trips`, trip);
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
    const res = await instance.put(`/trips/activities`, activites);
    dispatch({
      type: types.SET_TRIP_ACTIVITIES,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
