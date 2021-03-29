import instance from "./instance";
import * as types from "../types";

// ADD ACTIVITY
export const addActivity = (activity) => {
  return { type: types.ADD_ACTIVITY, payload: activity };
};
