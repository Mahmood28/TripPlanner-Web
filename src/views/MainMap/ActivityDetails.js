import React from "react";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
// Store
import { addActivity } from "../../store/actions/tripActions";
//Styling
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Button,
} from "@material-ui/core";
import { DialogContainer, StyledImage, StyledDescription } from "./styles";
import { Rating } from "@material-ui/lab";

const ActivityDetails = ({ activity, details, handleDetails, handleOpen }) => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const add = (activity) => {
    dispatch(addActivity(activity));
    handleOpen(activity.id);
    handleDetails(activity.id);
    addToast("Activity added to your trip", {
      appearance: "success",
      autoDismiss: true,
    });
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
        <Button autoFocus color="primary" onClick={() => add(activity)}>
          Add Activity
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ActivityDetails;
