import * as types from "../types";

const initialState = {
  profiles: [],
  search: [],
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PROFILE:
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
      };
    case types.SEARCH_PROFILES:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};

export default tripReducer;
