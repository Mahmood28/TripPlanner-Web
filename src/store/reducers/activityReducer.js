import * as types from "../types";

const initialState = {
  activities: [],
  loading: true,
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
        loading: false,
      };
    case types.SET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return state;
    case types.DELETE_REVIEW:
      const review = action.payload;
      const activityIdx = state.activities.findIndex(
        (_activity) => _activity.id === review.activity.id
      );
      if (activityIdx >= 0) {
        let activity = state.activities[activityIdx];
        activity = {
          ...activity,
          reviews: activity.reviews.filter(
            (_review) => _review.id !== review.id
          ),
        };
        state.activities[activityIdx] = activity;
        return {
          ...state,
          activities: state.activities,
        };
      } else {
        return state;
      }
  }
};

export default activityReducer;
