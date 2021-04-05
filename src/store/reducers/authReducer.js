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
      return {
        ...state,
        user: action.payload,
      };
    case types.FETCH_HISTORY:
      return {
        ...state,
        history: action.payload,
        loading: false,
      };
    case types.FETCH_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case types.DELETE_TRIP:
      return {
        ...state,
        history: state.history.filter((trip) => trip.id !== action.payload),
      };
    case types.DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter(
          (review) => review.id !== action.payload.id
        ),
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
