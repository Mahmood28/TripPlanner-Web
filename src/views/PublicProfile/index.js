import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
// Components
import { fetchProfile } from "../../store/actions/userActions";
import Loader from "../../components/Loading/Loader";
import TripHistory from "views/TripHistory";
import ReviewList from "views/Profile/ReviewList";
import Profile from "./Profile";
import Favourites from "views/Favourites";
import TabPanel from "./TabPanel";
// Styling
import { Explore, RateReview, Favorite } from "@material-ui/icons";
import { Paper, Tabs, Tab } from "@material-ui/core/";

const PublicProfile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const [value, setValue] = useState(0);
  const { profiles } = useSelector((state) => state.userReducer);

  if (!profiles.some((profile) => profile.username === username)) {
    dispatch(fetchProfile(username));
    return <Loader />;
  }

  const profile = profiles.find((profile) => profile.username === username);

  return (
    <>
      <div
        style={{
          display: "Flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Profile profile={profile} />
      </div>
      <div
        style={{
          display: "Flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Paper square>
          <Tabs
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
          >
            <Tab icon={<Explore />} label="TRIPS" />
            <Tab icon={<RateReview />} label="REVIEWS" />
            <Tab icon={<Favorite />} label="FAVORITES" />
          </Tabs>
        </Paper>
      </div>
      <TabPanel value={value} index={0}>
        {profile.trips.length ? (
          <TripHistory _trips={profile.trips} profile={profile} />
        ) : (
          `${profile.username} has not planned trips.`
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {profile.reviews.length ? (
          <ReviewList _reviews={profile.reviews} profile={profile} />
        ) : (
          `${profile.username} has not submitted reviews.`
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {profile.favourites.length ? (
          <Favourites profile={profile} />
        ) : (
          `${profile.username} has not added any favourite activities.`
        )}
      </TabPanel>
    </>
  );
};

export default PublicProfile;
