import React from "react";
import { useState } from "react";
import { MAP_API_KEY } from "keys";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
// Data
import activities from "views/MainMap/activities";
// Components
import Loading from "components/Loading";
import Markers from "views/MainMap/Markers";
// Styling
import { StyledMapContainer, StyledMapElement } from "views/MainMap/styles";
import customMap from "./customMap";

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: (
      <StyledMapContainer>
        <Loading />
      </StyledMapContainer>
    ),
    containerElement: <StyledMapContainer />,
    mapElement: <StyledMapElement />,
  }),
  withScriptjs,
  withGoogleMap
)(({ isMarkerShown, lng, lat }) => {
  let initialState = {};
  for (const activity of activities) initialState[activity.id] = false;
  const [open, setOpen] = useState(initialState);
  const [details, setDetails] = useState(initialState);
  const handleOpen = (id) => {
    setOpen({ ...initialState, [id]: !open[id] });
  };
  const handleDetails = (id) => {
    setDetails({ ...initialState, [id]: !details[id] });
  };

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat, lng }}
      options={{
        styles: customMap,
      }}
    >
      {isMarkerShown && (
        <Markers
          open={open}
          handleOpen={handleOpen}
          details={details}
          handleDetails={handleDetails}
        />
      )}
    </GoogleMap>
  );
});

export default Map;
