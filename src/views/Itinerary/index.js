import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import DayTable from "views/Itinerary/DayTable";

const useStyles = makeStyles(() => ({
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Itinerary = () => {
  const classes = useStyles();
  const { itinerary } = useSelector((state) => state.trip);
  const activeTrip = JSON.parse(localStorage.getItem("activeTrip"));

  if (!itinerary.days) return <p>Loading...</p>;
  const days = itinerary.days.sort((a, b) => a.day - b.day);
  console.log("Itinerary", itinerary);
  return (
    <div>
      <Box className={classes.box}>
        <h2>
          {activeTrip.destination.city}, {activeTrip.destination.country}
        </h2>
      </Box>
      <Box className={classes.box}>
        <h3>
          {moment(activeTrip.startDate).format("LL")} -{" "}
          {moment(activeTrip.endDate).format("LL")}
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
