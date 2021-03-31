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

export const activitiesList = (destinationId) => async (dispatch) => {
  try {
    // REVIEW: Why is the ID not in the URL? destinations/:destinationId/activities
    const res = await instance.put("/activities", destinationId);
    dispatch({
      type: types.SET_ACTIVITIES,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
