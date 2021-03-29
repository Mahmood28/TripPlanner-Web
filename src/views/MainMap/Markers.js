import React, { useState } from "react";
import { Marker, InfoWindow } from "react-google-maps";
// Data
// import activities from "views/MainMap/activities";
//Components
import ActivityDetails from "./ActivityDetails";
//Styling
import { Divider, Typography, CardContent } from "@material-ui/core";
import {
  StarRounded,
  StarHalfRounded,
  StarBorderRounded,
  Details,
} from "@material-ui/icons";
import {
  ButtonContainer,
  InfoCard,
  StyledButton,
  StyledHeader,
  StarContainer,
  StyledContainer,
} from "./styles";

const Markers = ({ open, handleOpen, details, handleDetails, activities }) => {
  const starRating = (rating) => {
    const arr = [];
    for (let i = 1; i <= 5; i++)
      arr.push(
        Math.floor(rating) >= i ? (
          <StarRounded style={{ color: "#ffd700" }} />
        ) : rating > i - 1 ? (
          <StarHalfRounded style={{ color: "#ffd700" }} />
        ) : (
          <StarBorderRounded style={{ color: "#ffd700" }} />
        )
      );
    return arr;
  };
  const markers = activities.map((activity) => (
    <Marker
      key={activity.id}
      position={{
        lat: +activity.geoCode.latitude,
        lng: +activity.geoCode.longitude,
      }}
      onClick={() => handleOpen(activity.id)}
    >
      {open[activity.id] && (
        <InfoWindow onCloseClick={() => handleOpen(activity.id)}>
          <InfoCard>
            <StyledHeader title={activity.name} />
            <StarContainer>{starRating(activity.rating)}</StarContainer>
            <Divider variant="middle" />
            <ButtonContainer>
              <StyledButton
                variant="contained"
                color="primary"
                onClick={() => handleDetails(activity.id)}
              >
                View
              </StyledButton>
              <StyledButton variant="contained" color="primary">
                Add
              </StyledButton>
            </ButtonContainer>
            <ActivityDetails
              details={details}
              handleDetails={handleDetails}
              activity={activity}
              starRating={starRating}
            />
          </InfoCard>
        </InfoWindow>
      )}
    </Marker>
  ));
  return markers;
};

export default Markers;
