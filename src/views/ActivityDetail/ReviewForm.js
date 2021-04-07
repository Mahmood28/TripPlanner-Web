import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addReview } from "store/actions/activityActions";
// Components
import Media from "components/Media/Media";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { Rating } from "@material-ui/lab";
import { Star } from "@material-ui/icons";
import { Box } from "@material-ui/core";

import avatar from "assets/img/faces/avatar3.png";
import sectionCommentsStyle from "assets/jss/material-dashboard-pro-react/views/sectionCommentsStyle.js";
const useStyles = makeStyles(sectionCommentsStyle);

export const StyledRating = withStyles({
  iconFilled: {
    color: "#ff9800",
  },
  iconHover: {
    color: "#ff9800",
  },
})(Rating);

const ReviewForm = ({ user, activityId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const date = new Date().toISOString().slice(0, 10);
  const [review, setReview] = useState({ date, rating: 0, description: "" });

  const handleChange = (event) =>
    setReview({ ...review, [event.target.name]: event.target.value });

  const handleSubmit = () => {
    dispatch(addReview(activityId, review));
    setReview({ date, rating: 0, description: "" });
  };

  return (
    <Media
      avatar={avatar}
      title={<span>{user.firstName + " " + user.lastName}</span>}
      body={
        <>
          <Box mt={2}>
            <h6>Rate your experience</h6>
            <StyledRating
              value={review.rating}
              onChange={(event, rating) => setReview({ ...review, rating })}
              precision={0.5}
              icon={<Star fontSize="30px" />}
            />
          </Box>
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
        </>
      }
      footer={
        <Button
          color="rose"
          round
          className={classes.footerButtons}
          onClick={handleSubmit}
        >
          Post Review
        </Button>
      }
    />
  );
};

export default ReviewForm;
