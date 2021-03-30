import instance from "./instance";
import * as types from "../types";

export const tripCreate = (trip) => async (dispatch) => {
  try {
    const res = await instance.post(`/trips`, trip);
    localStorage.setItem("ActiveTrip", JSON.stringify(res.data));
    dispatch({
      type: types.SET_TRIP,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const addActivity = (activity) => {
  return { type: types.ADD_ACTIVITY, payload: activity };
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

export const handleActivity = (activity) => ({
  type: types.HANDLE_ACTIVITY,
  payload: activity,
});


