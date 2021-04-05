import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
//Components
import Map from "./Map";
//Styling
import { Tabs, Tab, Paper, Typography } from "@material-ui/core";
import Loading from "components/Loading";
import DayTimeline from "./DayTimeline";
import { StyledContainer } from "./styles";

const Routes = () => {
  const [shown, setShown] = useState(0);
  const { itinerary, trip } = useSelector((state) => state.tripReducer);
  const { days } = itinerary;

  if (days == undefined) return <Loading />;

  const location = trip.destination;

  const dayTabs = days.map((day) => (
    <Tab label={`Day ${day.day}`} disabled={!day.activities.length} />
  ));

  if (days[shown].activities.length === 0)
    return (
      <p>start planning your trip by adding activities in the itinerary</p>
    );

  const sortedActivities = days[shown].activities.sort(
    (a, b) =>
      moment.duration(a.DayActivity.startTime) -
      moment.duration(b.DayActivity.startTime)
  );

  return (
    <div>
      <Typography variant="h3">
        Your {days.length} Days in {location.city}
      </Typography>
      <StyledContainer>
        <div style={{ minWidth: "60%" }}>
          <Paper>
            <Tabs
              value={shown}
              onChange={(event, day) => setShown(day)}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              {dayTabs}
            </Tabs>
          </Paper>
          <Map
            isMarkerShown
            lat={location.latitude}
            lng={location.longitude}
            activities={sortedActivities}
            shown={shown}
          />
        </div>
        <DayTimeline activities={sortedActivities} />
      </StyledContainer>
    </div>
  );
};

export default Routes;
