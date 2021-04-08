import * as types from "../types";

const initialState = {
  profiles: [],
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PROFILE:
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
      };

    default:
      return state;
  }
};

export default tripReducer;
