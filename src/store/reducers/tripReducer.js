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
    case types.HANDLE_ACTIVITY:
      const remove = state.activities.includes(action.payload);
      return {
        ...state,
        activities: remove
          ? state.activities.filter((activity) => activity !== action.payload)
          : [...state.activities, action.payload],
      };

    default:
      return state;
  }
};

export default tripReducer;
