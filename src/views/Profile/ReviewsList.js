import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";
import ReviewItem from "./ReviewItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function ReviewsList() {
  const classes = useStyles();
  const { reviews } = useSelector((state) => state.authReducer);

  if (!reviews) return <CircularProgress color="inherit" />;

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
}
