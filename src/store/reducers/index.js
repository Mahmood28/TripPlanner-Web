import { combineReducers } from "redux";
import authReducer from "./authReducer";
import activityReducer from "./activityReducer";
import tripReducer from "./tripReducer";

const rootReducer = combineReducers({
  authReducer,
  activityReducer,
  tripReducer,
});

export default rootReducer;
