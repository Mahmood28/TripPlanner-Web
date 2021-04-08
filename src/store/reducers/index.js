import { combineReducers } from "redux";
import authReducer from "./authReducer";
import activityReducer from "./activityReducer";
import tripReducer from "./tripReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  authReducer,
  activityReducer,
  tripReducer,
  userReducer,
});

export default rootReducer;
