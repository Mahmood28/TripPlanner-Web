import * as types from "../types";

const initialState = {
  user: null,
  history: [],
  reviews: [],
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return { ...state, user: action.payload };

    case types.FETCH_HISTORY:
      return { ...state, history: action.payload, loading: false };

    case types.FETH_REVIEWS:
      return { ...state, reviews: action.payload };

    case types.DELETE_TRIP:
      const remainingTrips = state.history.filter(
        (trip) => trip.id !== action.payload
      );
      return {
        ...state,
        history: remainingTrips,
      };
    case types.DELETE_REVIEW:
      const remainingReviews = state.reviews.filter(
        (review) => review.id !== action.payload.id
      );
      return {
        ...state,
        reviews: remainingReviews,
      };

    default:
      return state;
  }
};

export default authReducer;
