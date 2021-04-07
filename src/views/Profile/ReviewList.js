import React, { useEffect } from "react";
import { Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "store/actions/authActions";
// Components
import GridContainer from "components/Grid/GridContainer";
import ReviewCard from "./ReviewCard";
import Loader from "components/Loading/Loader";
// Styling

const ReviewList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const { reviews } = useSelector((state) => state.authReducer);
  const { user } = useSelector((state) => state.authReducer);

  if (!user) return <Redirect to="/404" />;
  if (!reviews) return <Loader />;

  return (
    <GridContainer justify="center">
      {reviews.map((review) => (
        <ReviewCard review={review} key={review.id} />
      ))}
    </GridContainer>
  );
};

export default ReviewList;
