import React from "react";
import { useSelector } from "react-redux";
// Components
import Loading from "components/Loading";
import Map from "views/MainMap/Map";

const MainMap = () => {
  const location = JSON.parse(localStorage.getItem("ActiveTrip")).destination;
  const activities = useSelector((state) => state.activity.activities);

  if (activities.length === 0) return <Loading />;
  return (
    <Map
      isMarkerShown
      lat={location.latitude}
      lng={location.longitude}
      activities={activities}
    />
  );
};

export default MainMap;
