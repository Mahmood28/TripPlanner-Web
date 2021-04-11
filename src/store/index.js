import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import Cookies from "js-cookie";

// Actions
import { checkForToken, fetchFavourites } from "./actions/authActions";
import { listActivities } from "./actions/activityActions";
import {
  fetchActivities,
  fetchItinerary,
  handleDirections,
} from "./actions/tripActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const trip = JSON.parse(localStorage.getItem("activeTrip"));
if (trip) {
  store.dispatch(listActivities(trip.destination.id));
  store.dispatch(fetchItinerary(trip.id));
  store.dispatch({
    type: "SET_TRIP",
    payload: trip,
  });
}

const activities = JSON.parse(localStorage.getItem("myActivities"));
if (activities) store.dispatch(fetchActivities(activities));

const directions = JSON.parse(localStorage.getItem("directions"));
if (directions) store.dispatch(handleDirections(directions));

store.dispatch(checkForToken());

const token = Cookies.get("token");
if (token) store.dispatch(fetchFavourites());

export default store;
