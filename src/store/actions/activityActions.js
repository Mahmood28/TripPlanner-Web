import instance from "./instance";
import * as types from "../types";

export const searchActivities = (destination) => async (dispatch) => {
  try {
    const res = await instance.post("/activities", destination);
    dispatch({
      type: types.SEARCH_ACTIVITY,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const listActivities = (destinationId) => async (dispatch) => {
  try {
    const res = await instance.get(`/destinations/${destinationId}/activities`);
    dispatch({
      type: types.SET_ACTIVITIES,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
export const fetchActivity = (activitySlug, history) => async (dispatch) => {
  try {
    const res = await instance.get(`/activities/${activitySlug}`);
    if (!res.data) {
      history.replace("/404");
    }
    dispatch({
      type: types.FETCH_ACTIVITY,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

export const addReview = (activityId, review) => async (dispatch) => {
  try {
    const res = await instance.post(
      `/activities/${activityId}/reviews`,
      review
    );
    dispatch({
      type: types.SET_ACTIVITIES,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
