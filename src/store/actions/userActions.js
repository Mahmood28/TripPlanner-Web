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

export const searchProfiles = (query) => async (dispatch) => {
  try {
    if (!query.length)
      dispatch({
        type: types.SEARCH_PROFILES,
        payload: [],
      });
    else {
      const res = await instance.get(`/profile/search?username=${query}`);
      dispatch({
        type: types.SEARCH_PROFILES,
        payload: res.data,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
