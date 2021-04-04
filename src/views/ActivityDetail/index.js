import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// Components
import ActivityCard from "views/ActivityDetail/ActivityCard";
import ReviewList from "views/ActivityDetail/ReviewList";
import EditReview from "views/Profile/EditReview";

const ActivityDetail = () => {
  const { activities } = useSelector((state) => state.activityReducer);
  const { activitySlug } = useParams();

  const foundActivity = activities.find(
    (activity) => activity.slug === activitySlug
  );

  if (!foundActivity) return <p>Loading...</p>;
  return (
    <>
      <ActivityCard activity={foundActivity} />
      <ReviewList activity={foundActivity} />
      <EditReview />
    </>
  );
};

export default ActivityDetail;
