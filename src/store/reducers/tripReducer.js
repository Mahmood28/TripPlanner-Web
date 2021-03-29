import * as types from "../types";

const initialState = {
  trips: [],
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ACTIVITY:
      return { ...state, trips: [...state.trips, action.payload] };
    default:
      return state;
  }
};

export default tripReducer;
