import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
// Components
import ActivityCard from "views/ActivityDetail/ActivityCard";
import ReviewList from "views/ActivityDetail/ReviewList";
import Loader from "components/Loading/Loader";
import { fetchActivity } from "store/actions/activityActions";

const ActivityDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { activities } = useSelector((state) => state.activityReducer);
  const { fetchedActivities } = useSelector((state) => state.activityReducer);
  const { activitySlug } = useParams();
  const foundActivity =
    activities.find((activity) => activity.slug === activitySlug) ||
    fetchedActivities.find((activity) => activity.slug === activitySlug);

  if (!foundActivity) {
    dispatch(fetchActivity(activitySlug, history));
    return <Loader />;
  }

  return (
    <>
      <ActivityCard activity={foundActivity} />
      <ReviewList activity={foundActivity} />
    </>
  );
};

export default ActivityDetail;
