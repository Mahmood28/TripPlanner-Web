import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

// Actions
import { checkForToken } from "./actions/authActions";
import { activitiesList } from "./actions/activityActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const trip = JSON.parse(localStorage.getItem("ActiveTrip"));
if (trip !== null) {
  const destinationId = { id: trip.destination.id };
  console.log("destinationId", destinationId);
  store.dispatch(activitiesList(destinationId));
}

store.dispatch(checkForToken());
export default store;
