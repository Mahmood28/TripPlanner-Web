import instance from "./instance";
import * as types from "../types";

export const searchActivity = () => async (dispatch) => {
  try {
    const destination = {
      latitude: 52.484356798546685,
      longitude: 13.349174897280887,
    };
    const res = await instance.post(`/activities`, destination);
    dispatch({
      type: types.SEARCH_ACTIVITY,
      payload: res.data,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
