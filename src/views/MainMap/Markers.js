import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Marker, InfoWindow } from "react-google-maps";
import { useToasts } from "react-toast-notifications";
// Data
import activities from "views/MainMap/activities";
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

// Store
import { addActivity } from "../../store/actions/tripActions";

const Markers = ({ open, handleOpen, details, handleDetails }) => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
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

  const add = (activity) => {
    dispatch(addActivity(activity));
    handleOpen(activity.id);
    addToast("Activity added to your trip", {
      appearance: "success",
      autoDismiss: true,
    });
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
              <StyledButton
                variant="contained"
                color="primary"
                onClick={() => add(activity)}
              >
                Add
              </StyledButton>
            </ButtonContainer>
            <ActivityDetails
              details={details}
              handleDetails={handleDetails}
              activity={activity}
              starRating={starRating}
              handleOpen={handleOpen}
            />
          </InfoCard>
        </InfoWindow>
      )}
    </Marker>
  ));
  return markers;
};

export default Markers;
