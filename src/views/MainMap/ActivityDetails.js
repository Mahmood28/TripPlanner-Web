import React from "react";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { handleActivity } from "../../store/actions/tripActions";
// Components
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Button,
} from "@material-ui/core";
// Styling
import { Rating } from "@material-ui/lab";
import { DialogContainer, StyledImage, StyledDescription } from "./styles";

const ActivityDetails = ({
  activity,
  details,
  handleDetails,
  handleOpen,
  remove,
}) => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const add = async (activity) => {
    await dispatch(handleActivity(activity));
    handleOpen(activity.id);
    handleDetails(activity.id);
    addToast(
      `${activity.name} ${
        remove ? "removed from" : "added to"
      } your itinerary.`,
      {
        appearance: `${remove ? "warning" : "success"}`,
        autoDismiss: true,
      }
    );
  };

  return (
    <Dialog
      onClose={() => handleDetails(activity.id)}
      open={details[activity.id]}
    >
      <DialogTitle onClose={() => handleDetails(activity.id)}>
        {activity.name}
      </DialogTitle>
      <DialogContent dividers>
        <StyledImage src={activity.pictures[0]} key={activity.id} />
        <StyledDescription gutterBottom>
          {activity.shortDescription}
        </StyledDescription>
        <DialogContainer>
          <Typography gutterBottom align="left">
            <Rating defaultValue={activity.rating} precision={0.25} readOnly />
          </Typography>
          <Typography gutterBottom align="right">
            {`${activity.price.currencyCode} ${activity.price.amount}`}
          </Typography>
        </DialogContainer>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          color="primary"
          onClick={() => handleDetails(activity.id)}
        >
          Cancel
        </Button>
        <Button
          autoFocus
          color={remove ? "secondary" : "primary"}
          onClick={() => add(activity)}
        >
          {`${remove ? "Remove" : "Add"} Activity`}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ActivityDetails;
