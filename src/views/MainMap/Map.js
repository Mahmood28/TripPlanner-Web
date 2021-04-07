/* eslint-disable no-undef */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { MAP_API_KEY } from "keys";
// Components
import Loading from "components/Loading";
import Markers from "views/MainMap/Markers";
// Styling
import {
  StyledMapContainer,
  StyledMapElement,
  styledMap,
} from "views/MainMap/styles";

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
)(({ isMarkerShown, lng, lat, filter, activities }) => {
  const selectedActivities = useSelector(
    (state) => state.tripReducer.activities
  );

  let initialState = {};
  activities.forEach((activity) => (initialState[activity.id] = false));

  const [open, setOpen] = useState(initialState);
  const [details, setDetails] = useState(initialState);
  const [mapRef, setMapRef] = useState(null);

  const handleOpen = (id) => {
    setOpen({ ...initialState, [id]: !open[id] });
  };

  const handleDetails = (id) => {
    setDetails({ ...initialState, [id]: !details[id] });
  };

  let bounds = new google.maps.LatLngBounds();

  activities.forEach((activity) => {
    bounds.extend(
      new google.maps.LatLng(
        +activity.geoCode.latitude,
        +activity.geoCode.longitude
      )
    );
  });

  if (mapRef) mapRef.fitBounds(bounds);

  return (
    <GoogleMap
      zoom={11}
      center={{ lat, lng }}
      options={{
        styles: styledMap,
      }}
      ref={(ref) => {
        setMapRef(ref);
      }}
    >
      {isMarkerShown && (
        <Markers
          open={open}
          handleOpen={handleOpen}
          details={details}
          handleDetails={handleDetails}
          filter={filter}
          activities={activities}
          selectedActivities={selectedActivities}
        />
      )}
    </GoogleMap>
  );
});

export default Map;
