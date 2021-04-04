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
    // case types.DELETE_REVIEW:
    //   const remainingReviews = state.activities.reviews.filter(
    //     (review) => review.id !== action.payload
    //   );
    //   return {
    //     ...state,
    //     reviews: remainingReviews,
    //   };
  }
};

export default activityReducer;
