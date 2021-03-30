import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

// Actions
import { checkForToken } from "./actions/authActions";
import { activitiesList } from "./actions/activityActions";
import { fetchActivities } from "./actions/tripActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const trip = JSON.parse(localStorage.getItem("activeTrip"));
if (trip !== null) store.dispatch(activitiesList({ id: trip.destination.id }));

const activities = JSON.parse(localStorage.getItem("myActivities"));
if (activities !== null) store.dispatch(fetchActivities({ activities }));

store.dispatch(checkForToken());

export default store;
