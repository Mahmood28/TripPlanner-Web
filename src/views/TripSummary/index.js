import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams } from "react-router";
import moment from "moment";
//Components
import Loader from "components/Loading/Loader";
import DayItem from "./DayItem";
// Stylilng
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import styles from "../../assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import { AddAlarmSharp } from "@material-ui/icons";
import { handleDirections } from "store/actions/tripActions";

const useStyles = makeStyles(styles);

const TripSummary = ({ activeTrip, itinerary }) => {
  const classes = useStyles();
  const { tripId } = useParams();
  const { history } = useSelector((state) => state.authReducer);
  const tripDirections = useSelector((state) => state.tripReducer.directions);
  const [directions, setDirections] = useState(tripDirections ?? {});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleDirections(directions));
  }, [directions]);

  const trip = tripId
    ? history.find((_trip) => _trip.id === +tripId)
    : activeTrip;

  if (!trip) {
    return <Redirect to="/trips-history" />;
  }
  const { days } = tripId ? trip : itinerary;

  if (!days) return <Loader />;

  const tripDays = days.sort((a, b) => a.day - b.day);

  const daysList = tripDays.map((day) => (
    <DayItem
      day={day}
      key={day.id}
      destination={trip.destination}
      directions={directions}
      setDirections={setDirections}
    />
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
};

export default TripSummary;
