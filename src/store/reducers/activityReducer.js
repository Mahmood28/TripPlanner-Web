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

    default:
      return state;
  }
};

export default activityReducer;
