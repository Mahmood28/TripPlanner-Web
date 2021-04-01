import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Components
import Button from "components/CustomButtons/Button";
import ActivityCard from "views/Itinerary/ActivityCard";

const ActivityList = ({ day, event, setEvent }) => {
  const history = useHistory();
  const { activities } = useSelector((state) => state.tripReducer);

  return (
    <div>
      {activities.length > 0 ? (
        activities.map((activity) => (
          <ActivityCard
            day={day}
            activity={activity}
            event={event}
            setEvent={setEvent}
            key={activity.id}
          />
        ))
      ) : (
        <Button
          color="warning"
          simple
          style={{ width: "80ch" }}
          onClick={() => history.push("/explore")}
        >
          Explore Activities
        </Button>
      )}
    </div>
  );
};

export default ActivityList;
