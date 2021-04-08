import React, { useEffect } from "react";
import { Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "store/actions/authActions";
// Components
import GridContainer from "components/Grid/GridContainer";
import ReviewCard from "./ReviewCard";
import Loader from "components/Loading/Loader";
// Styling

const ReviewList = ({ _reviews, profile }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const { reviews } = useSelector((state) => state.authReducer);
  const { user } = useSelector((state) => state.authReducer);

  console.log(profile);
  if (!user && !profile) return <Redirect to="/404" />;
  if (!reviews && !_reviews) return <Loader />;

  const userReviews = _reviews ?? reviews;
  const reviewList = userReviews.map((review) => (
    <ReviewCard review={review} key={review.id} profile={profile} />
  ));

  return <GridContainer justify="center">{reviewList} </GridContainer>;
};

export default ReviewList;
