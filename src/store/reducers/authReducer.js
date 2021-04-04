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
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.id !== action.payload),
      };
    case types.UPDATE_REVIEW:
      const updatedReview = action.payload;
      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review.id === updatedReview.id ? updatedReview : review
        ),
      };
    default:
      return state;
  }
};

export default authReducer;
