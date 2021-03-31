import { combineReducers } from "redux";
import user from "./authReducer";
import activity from "./activityReducer";
import trip from "./tripReducer";

const rootReducer = combineReducers({ user, activity, trip });

// REVIEW: Better naming: userReducer

export default rootReducer;
