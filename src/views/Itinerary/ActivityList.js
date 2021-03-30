import React from "react";
import { useSelector } from "react-redux";
// Core Components
import ActivityCard from "views/Itinerary/ActivityCard";

const ActivityList = ({ setEvent }) => {
  const { activities } = useSelector((state) => state.trip);

  return (
    <div>
      {activities.map((activity) => (
        <ActivityCard
          activity={activity}
          key={activity.id}
          setEvent={setEvent}
        />
      ))}
    </div>
  );
};

export default ActivityList;
