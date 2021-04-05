import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
// Components
import GridContainer from "components/Grid/GridContainer";
import DayTable from "views/Itinerary/DayTable";
import Loader from "components/Loading/Loader";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Itinerary = () => {
  const classes = useStyles();
  const { itinerary } = useSelector((state) => state.tripReducer);
  const trip = JSON.parse(localStorage.getItem("activeTrip"));

  if (!itinerary.days) return <Loader />;
  const days = itinerary.days.sort((a, b) => a.day - b.day);

  return (
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
      <GridContainer>
        {days.map((day) => (
          <DayTable day={day} key={day.day} />
        ))}
      </GridContainer>
    </div>
  );
};

export default Itinerary;
