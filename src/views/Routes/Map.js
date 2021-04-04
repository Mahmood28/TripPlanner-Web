/* eslint-disable no-undef */
import React, { useState } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} from "react-google-maps";
import { MAP_API_KEY } from "keys";
// Components
import Loading from "components/Loading";
// Styling
import { StyledMapContainer, StyledMapElement, styledMap } from "./styles";

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
)(({ lng, lat, activities, shown }) => {
  const [directions, setDirections] = useState({ 0: null });

  const DirectionsService = new google.maps.DirectionsService();

  if (!directions[shown] && activities.length > 1)
    DirectionsService.route(
      {
        origin: {
          lat: +activities[0].geoCode.latitude,
          lng: +activities[0].geoCode.longitude,
        },
        destination: {
          lat: +activities[activities.length - 1].geoCode.latitude,
          lng: +activities[activities.length - 1].geoCode.longitude,
        },
        waypoints: activities
          .slice(1, activities.length - 1)
          .map((activity) => ({
            location: {
              lat: +activity.geoCode.latitude,
              lng: +activity.geoCode.longitude,
            },
            stopover: true,
          })),
        travelMode: "DRIVING",
      },
      (result, status) => {
        if (status === "OK") {
          setDirections({ ...directions, [shown]: result });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );

  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat, lng }}
      options={{
        styles: styledMap,
      }}
    >
      <DirectionsRenderer
        directions={directions[shown]}
        options={{
          polylineOptions: {
            stokeColor: "#FF0000",
            strokeOpacity: 0.5,
            strokeWeight: 4,
          },
          icon: { scale: 3 },
        }}
      />
      {activities.length === 1 && (
        <Marker
          key={activities[0].id}
          position={{
            lat: +activities[0].geoCode.latitude,
            lng: +activities[0].geoCode.longitude,
          }}
        />
      )}
    </GoogleMap>
  );
});

export default Map;
