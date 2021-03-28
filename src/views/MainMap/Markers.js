import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
// Data
import activities from "views/MainMap/activities";

const Markers = ({ open, handleOpen }) => {
  const markers = activities.map((activity) => (
    <Marker
      key={activity.id}
      position={{
        lat: +activity.geoCode.latitude,
        lng: +activity.geoCode.longitude,
      }}
      onClick={() => handleOpen(activity.id)}
      //   icon="https://www.russellheimlich.com/blog/wp-content/uploads/2008/04/homer-in-html-css.png"
    >
      {open[activity.id] && (
        <InfoWindow onCloseClick={() => handleOpen(activity.id)}>
          <div>{activity.name}</div>
        </InfoWindow>
      )}
    </Marker>
  ));
  return markers;
};

export default Markers;
