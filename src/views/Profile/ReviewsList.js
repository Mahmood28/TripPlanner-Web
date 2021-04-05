import React from "react";
import { useSelector } from "react-redux";
// Components
import ReviewItem from "./ReviewItem";
import Loader from "components/Loading/Loader";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { List, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const ReviewsList = () => {
  const classes = useStyles();
  const { reviews } = useSelector((state) => state.authReducer);

  if (!reviews) return <Loader />;

  const reviewsList = reviews.map((review) => (
    <ReviewItem review={review} key={review.id} />
  ));

  return (
    <>
      <List className={classes.root}>
        {reviewsList}
        <Divider variant="inset" component="li" />
      </List>
    </>
  );
};

export default ReviewsList;
