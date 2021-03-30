import React from "react";
import { useSelector } from "react-redux";
// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import DayTable from "views/Itinerary/DayTable";
const Itinerary = () => {
  const { itinerary } = useSelector((state) => state.trip);

  if (!itinerary.days) return <p>Loading...</p>;
  const days = itinerary.days.sort((a, b) => a.day - b.day);

  return (
    <GridContainer>
      {days.map((day) => (
        <DayTable day={day} key={day.day} />
      ))}
    </GridContainer>
  );
};

export default Itinerary;
