/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
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
// import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

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
  const [ref1, setRef1] = useState(false);
  const [pan, setPan] = useState(true);

  useEffect(() => {
    setPan(true);
  }, [activities]);

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

  if (ref1 && ref1.props && pan) {
    ref1.fitBounds(bounds, 180);
    ref1.panToBounds(bounds);
    setPan(false);
  }
  return (
    <GoogleMap
      defaultZoom={11}
      center={{ lat, lng }}
      options={{
        styles: styledMap,
      }}
      ref={(ref) => {
        setRef1(ref);
      }}
    >
      {/* <MarkerClusterer
        onClick={(markerClusterer) => markerClusterer.getMarkers()}
        averageCenter
        enableRetinaIcons 
      > */}
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
      {/* </MarkerClusterer> */}
    </GoogleMap>
  );
});

export default Map;
