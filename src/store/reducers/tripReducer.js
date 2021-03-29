import * as types from "../types";

const initialState = {
  trip: {},
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TRIP:
      return {
        ...state,
        trip: action.payload,
      };
    default:
      return state;
  }
};

export default tripReducer;
