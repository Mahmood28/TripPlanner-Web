import { combineReducers } from "redux";
import user from "./authReducer";
import trip from "./tripReducer";

const rootReducer = combineReducers({ user, trip });

export default rootReducer;
