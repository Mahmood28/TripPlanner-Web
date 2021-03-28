import React from "react";
// Components
import Map from "views/MainMap/Map";

const MainMap = () => {
  const Tokyo = {
    lat: 35.6684415,
    lng: 139.6007848,
  };
  return <Map isMarkerShown lat={Tokyo.lat} lng={Tokyo.lng} />;
};

export default MainMap;
