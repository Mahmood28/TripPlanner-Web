import instance from "./instance";
import * as types from "../types";

export const searchActivity = (destination) => async (dispatch) => {
  try {
    const res = await instance.post(`/activities`, destination);
    dispatch({
      type: types.SEARCH_ACTIVITY,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
