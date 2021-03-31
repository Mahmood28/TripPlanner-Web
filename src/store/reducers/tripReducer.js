import * as types from "../types";

const initialState = {
  trip: {},
  activities: [],
  itinerary: {},
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TRIP:
      return {
        ...state,
        trip: action.payload,
      };
    case types.SET_TRIP_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case types.SET_ITINERARY:
      return {
        ...state,
        itinerary: action.payload,
      };
    case types.HANDLE_ACTIVITY:
      const remove = state.activities.includes(action.payload);

      const activities = remove
        ? state.activities.filter((activity) => activity !== action.payload)
        : [...state.activities, action.payload];

      const activitiesId = activities.map((activity) => activity.id);
      localStorage.setItem("myActivities", JSON.stringify(activitiesId));
      return {
        ...state,
        activities: activities,
      };
    default:
      return state;
  }
};

export default tripReducer;
