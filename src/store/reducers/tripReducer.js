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
      const activities = [...state.activities, action.payload];
      const activitiesId = activities.map((activity) => activity.id);
      localStorage.setItem("myActivities", JSON.stringify(activitiesId));
      return {
        ...state,
        activities,
      };
    case types.SET_TRIP_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return state;
  }
};

export default tripReducer;
