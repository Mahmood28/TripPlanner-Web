import instance from "./instance";
import * as types from "../types";

export const fetchProfile = (username) => async (dispatch) => {
  try {
    const res = await instance.get(`/profile/${username}`);
    dispatch({
      type: types.FETCH_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};
