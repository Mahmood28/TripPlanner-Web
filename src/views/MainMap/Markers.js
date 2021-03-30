import React from "react";
import { useDispatch } from "react-redux";
import { Marker, InfoWindow } from "react-google-maps";
//Components
import ActivityDetails from "./ActivityDetails";
//Styling
import { useToasts } from "react-toast-notifications";
import { Divider } from "@material-ui/core";
import {
  ButtonContainer,
  InfoCard,
  StyledButton,
  StyledHeader,
  StarContainer,
} from "./styles";
import { Rating } from "@material-ui/lab";
// Store
import { addActivity } from "../../store/actions/tripActions";

const Markers = ({
  open,
  handleOpen,
  details,
  handleDetails,
  filter,
  activities,
}) => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  //Filters
  const filteredActivities = activities.filter(
    (activity) =>
      +activity.price.amount >= filter.price[0] &&
      +activity.price.amount <= filter.price[1] &&
      +activity.rating >= filter.rating &&
      (activity.name.toLowerCase().includes(filter.query.toLowerCase()) ||
        activity.shortDescription
          .toLowerCase()
          .includes(filter.query.toLowerCase()))
  );

  const add = (activity) => {
    dispatch(addActivity(activity));
    handleOpen(activity.id);
    addToast("Activity added to your trip", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const markers = filteredActivities.map((activity) => (
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
            <StarContainer>
              <Rating
                defaultValue={activity.rating}
                precision={0.25}
                readOnly
              />
            </StarContainer>
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
