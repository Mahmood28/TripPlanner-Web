import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
// Components
import GridContainer from "components/Grid/GridContainer";
import DayTable from "views/Itinerary/DayTable";
import Loader from "components/Loading/Loader";
import Footer from "components/Footer/Footer";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { StyledTab, StyledTabs, StyledTabSection } from "./styles";

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
  const [shown, setShown] = useState(0);
  const trip = JSON.parse(localStorage.getItem("activeTrip"));

  if (!itinerary.days) return <Loader />;
  const days = itinerary.days.sort((a, b) => a.day - b.day);

  let daysList = [...days];
  const tripWeeks =
    itinerary.days.length >= 7
      ? new Array(Math.ceil(itinerary.days.length / 7)).fill().map((_, idx) => {
          return { weekNumber: idx + 1, daysList: daysList.splice(0, 7) };
        })
      : null;

  const weekTabs = tripWeeks
    ? tripWeeks.map((week) => <StyledTab label={`Week ${week.weekNumber}`} />)
    : null;

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
      {weekTabs && (
        <StyledTabSection>
          <StyledTabs
            value={shown}
            onChange={(event, week) => setShown(week)}
            variant="scrollable"
            scrollButtons="auto"
          >
            {weekTabs}
          </StyledTabs>
        </StyledTabSection>
      )}

      <GridContainer>
        {tripWeeks
          ? tripWeeks[shown].daysList.map((day) => (
              <DayTable day={day} key={day.day} />
            ))
          : days.map((day) => <DayTable day={day} key={day.day} />)}
      </GridContainer>
      <Footer fluid />
    </div>
  );
};

export default Itinerary;
