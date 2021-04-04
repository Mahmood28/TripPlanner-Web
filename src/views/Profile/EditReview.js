import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { updateReview } from "store/actions/tripActions";
// Components
import Button from "components/CustomButtons/Button";
import CustomInput from "components/CustomInput/CustomInput";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { StyledRating } from "views/ActivityDetail/ReviewForm";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from "@material-ui/core";
import { Edit, Star } from "@material-ui/icons";

import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle";
const useStyles = makeStyles(styles);

const EditReview = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [review, setReview] = useState({
    date: "",
    rating: 0,
    description: "",
  });

  const handleChange = (event) =>
    setReview({ ...review, [event.target.name]: event.target.value });

  const handleCancel = () => {
    setReview({
      date: "",
      rating: 0,
      description: "",
    });
    setOpen(false);
  };

  const handleSubmit = () => {
    const today = new Date().toISOString().slice(0, 10);
    review.date = today;
    // dispatch(editReview(activityId, review));
    setReview(review);
    setOpen(false);
  };

  return (
    <div>
      <Button
        color="warning"
        simple
        className={classes.actionButton}
        onClick={() => setOpen(true)}
      >
        <Edit className={classes.icon} />
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          <h4>Edit Review</h4>
        </DialogTitle>
        <DialogContent>
          <h6>Rate your experience</h6>
          <StyledRating
            value={review.rating}
            onChange={(event, rating) => setReview({ ...review, rating })}
            precision={0.5}
            icon={<Star fontSize="30px" />}
          />
          <CustomInput
            labelText="Describe your experience..."
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              value: review.description,
              name: "description",
              onChange: handleChange,
              multiline: true,
              rows: 5,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="rose">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="warning">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditReview;
