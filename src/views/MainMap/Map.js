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
  const selectedActivities = useSelector((state) => state.trip.activities);
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
      defaultZoom={11}
      defaultCenter={{ lat, lng }}
      options={{
        styles: styledMap,
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
