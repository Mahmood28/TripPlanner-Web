import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateReview } from "store/actions/authActions";
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
  CardMedia,
  Box,
} from "@material-ui/core";
import { Edit, Star } from "@material-ui/icons";

import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle";
const useStyles = makeStyles(styles);

const EditReview = ({ review }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    date: review.date,
    rating: review.rating,
    description: review.description,
  });

  const handleChange = (event) =>
    setNewReview({ ...newReview, [event.target.name]: event.target.value });

  const handleCancel = () => {
    setNewReview({
      date: review.date,
      rating: review.rating,
      description: review.description,
    });
    setOpen(false);
  };

  const handleSubmit = () => {
    const today = new Date().toISOString().slice(0, 10);
    newReview.date = today;
    dispatch(updateReview(review.id, newReview, review.activity.destinationId));
    setNewReview(newReview);
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
          <h4>{review.activity.name}</h4>
        </DialogTitle>
        <DialogContent>
          <CardMedia
            style={{ height: 200, borderRadius: "5px" }}
            image={review.activity.image}
            title={review.activity.name}
          />
          <h6>Rate your experience</h6>
          <StyledRating
            value={newReview.rating}
            onChange={(event, rating) => setNewReview({ ...newReview, rating })}
            precision={0.5}
            icon={<Star fontSize="30px" />}
          />
          <CustomInput
            labelText="Describe your experience..."
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              value: newReview.description,
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
