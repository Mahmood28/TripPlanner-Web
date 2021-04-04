import React from "react";
import { useSelector } from "react-redux";
// Components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Review from "views/ActivityDetail/Review";
import ReviewForm from "views/ActivityDetail/ReviewForm";
// Styling
import { makeStyles } from "@material-ui/core/styles";

import sectionCommentsStyle from "assets/jss/material-dashboard-pro-react/views/sectionCommentsStyle.js";
const useStyles = makeStyles(sectionCommentsStyle);

const ReviewList = ({ activity }) => {
  const classes = useStyles();
  const { user } = useSelector((state) => state.authReducer);

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <div>
            <h3 className={classes.title}>{activity.reviews.length} Reviews</h3>
            {activity.reviews.map((review) => (
              <Review review={review} key={review.id} />
            ))}
            <Review />
          </div>
          {user && (
            <>
              <h3 className={classes.title}>Leave a review</h3>
              <ReviewForm user={user} activityId={activity.id} />
            </>
          )}
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default ReviewList;
