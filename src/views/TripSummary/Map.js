/* eslint-disable no-undef */
import React, { useEffect } from "react";
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
import Loading from "../../components/Loading";
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
)(({ lng, lat, activities, directions, setDirections, day }) => {
  const DirectionsService = new google.maps.DirectionsService();

  if (
    !directions[day.id] ||
    directions[day.id].routes[0].legs.length < activities.length - 1
  ) {
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
          setDirections({ ...directions, [day.id]: result });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  return (
    <GoogleMap
      defaultZoom={11}
      center={{ lat, lng }}
      options={{
        styles: styledMap,
      }}
    >
      {activities.length === 1 ? (
        <Marker
          key={activities[0].id}
          position={{
            lat: +activities[0].geoCode.latitude,
            lng: +activities[0].geoCode.longitude,
          }}
        />
      ) : (
        <DirectionsRenderer
          directions={directions[day.id]}
          options={{
            polylineOptions: {
              stokeColor: "#FF0000",
              strokeOpacity: 0.5,
              strokeWeight: 4,
            },
            icon: { scale: 3 },
          }}
        />
      )}
    </GoogleMap>
  );
});

export default Map;
