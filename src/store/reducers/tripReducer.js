import * as types from "../types";

const initialState = {
  trip: {},
  activities: [],
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TRIP:
      return {
        ...state,
        trip: action.payload,
      };
    case types.ADD_ACTIVITY:
      return { 
        ...state, 
        activities: [...state.activities, action.payload] };

    default:
      return state;
  }
};

export default tripReducer;
