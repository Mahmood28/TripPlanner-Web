import instance from "./instance";
import * as types from "../types";

export const createTrip = (trip) => async (dispatch) => {
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

export const fetchActivities = (activites) => async (dispatch) => {
  try {
    const res = await instance.get("/trips/activities", { params: activites });
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
    const res = await instance.post("/trips/activities", activity);
    dispatch({
      type: types.SET_ITINERARY,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const updateActivity = (activity) => async (dispatch) => {
  try {
    const res = await instance.put("/trips/activity", activity);
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
    const res = await instance.delete("/trips/activity", { data: activity });
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
    const res = await instance.get("/trips/itinerary", { params: tripId });
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
