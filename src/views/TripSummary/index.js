import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import moment from "moment";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "../../assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

//Components
import Loader from "components/Loading/Loader";
import DayItem from "./DayItem.js";

const useStyles = makeStyles(styles);
export default function TripSummary({ activeTrip, itinerary }) {
  const classes = useStyles();
  const { tripId } = useParams();
  const { history } = useSelector((state) => state.authReducer);

  const trip = tripId
    ? history.find((_trip) => _trip.id === +tripId)
    : activeTrip;

  if (!trip) {
    return <Redirect to="/history" />;
  }
  const tripDays = tripId ? trip.days : itinerary.days;

  if (!tripDays) return <Loader />;
  const daysList = tripDays.map((day) => (
    <DayItem day={day} key={day.id} destination={trip.destination} />
  ));
  return (
    <div>
      <div>
        <Box className={classes.box}>
          <h2>
            {trip.destination.city}, {trip.destination.country}
          </h2>
        </Box>
        <Box className={classes.box}>
          <h3>
            {moment(trip.startDate).format("LL")} -{" "}
            {moment(trip.endDate).format("LL")}
          </h3>
        </Box>
      </div>
      {daysList}
    </div>
  );
}
