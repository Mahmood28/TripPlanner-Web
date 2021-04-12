import * as types from "../types";

const initialState = {
  profiles: [],
  search: [],
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PROFILE:
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
      };
    case types.SEARCH_PROFILES:
      return {
        ...state,
        search: action.payload,
      };
    case types.SET_FOLLOWERS:
      const { username, user } = action.payload;
      const foundProfile = state.profiles.find(
        (profile) => profile.username === username
      );
      const unfollow = foundProfile.some(
        (_user) => _user.username === user.username
      );
      return {
        ...state,
        profiles: [
          ...state.profiles.filter((profile) => profile.username !== username),
          {
            ...foundProfile,
            followers: unfollow
              ? foundProfile.followers.filter(
                  (follower) => follower.username === user.username
                )
              : { ...foundProfile.followers, user },
          },
        ],
      };

    default:
      return state;
  }
};

export default tripReducer;
