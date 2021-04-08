import React, { useEffect, useState } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams } from "react-router";
import { handleDirections } from "store/actions/tripActions";
import Loader from "components/Loading/Loader";
import Footer from "components/Footer/Footer";
import DayItem from "./DayItem";

//Components
import SocialShare from "./SocialShare";

// Stylilng
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import { AddAlarmSharp } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import { PageContainer } from "./styles";

const useStyles = makeStyles(styles);

const TripSummary = ({ activeTrip, itinerary }) => {
  const classes = useStyles();
  const { tripSlug } = useParams();
  const { history } = useSelector((state) => state.authReducer);
  const tripDirections = useSelector((state) => state.tripReducer.directions);
  const [directions, setDirections] = useState(tripDirections ?? {});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleDirections(directions));
  }, [directions]);

  const trip = tripSlug
    ? history.find((_trip) => _trip.slug === tripSlug)
    : activeTrip;

  if (!trip) {
    return <Redirect to="/trips-history" />;
  }
  const { days } = tripSlug ? trip : itinerary;

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
      <PageContainer>
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
          <SocialShare slug={trip.slug} destination={trip.destination} />
        </div>
        {daysList}
      </PageContainer>
      <Footer fluid />
    </div>
  );
};

export default TripSummary;
