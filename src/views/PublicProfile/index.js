import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProfile } from "../../store/actions/userActions";
import Loader from "../../components/Loading/Loader";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import CustomInput from "components/CustomInput/CustomInput";
import Clearfix from "components/Clearfix/Clearfix";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import CardIcon from "components/Card/CardIcon";
import CardAvatar from "components/Card/CardAvatar";
import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles";
import avatar from "assets/img/faces/avatar3.png";
import { Box, makeStyles } from "@material-ui/core";
import moment from "moment";
import {
  CalendarToday,
  Explore,
  RateReview,
  Favorite,
} from "@material-ui/icons";
import { Paper, Tabs, Tab, Typography } from "@material-ui/core/";
import TripHistory from "views/TripHistory";
import ReviewList from "views/Profile/ReviewList";

const useStyles = makeStyles(styles);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography align="center">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const PublicProfile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const [value, setValue] = useState(0);
  const profiles = useSelector((state) => state.userReducer.profiles);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!profiles.some((profile) => profile.username === username)) {
    console.log("hello");
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
        <Card profile style={{ width: "33%" }}>
          <CardAvatar profile>
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <img src={profile.image ?? avatar} alt={profile.username} />
            </a>
          </CardAvatar>
          <CardBody profile>
            <h3 className={classes.cardTitle}>{profile.username}</h3>
            <h4 className={classes.cardTitle}>
              {profile.firstName} {profile.lastName}
            </h4>
            <h6>
              <CalendarToday size="small" />
              {` Joined at ${moment(profile.createdAt).format("LL")}`}
            </h6>
            <Box mt={3} mb={3}>
              <p className={classes.description}>{profile.bio ?? ""}</p>
            </Box>
            <Button color="rose" round>
              Follow
            </Button>
          </CardBody>
        </Card>
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
            onChange={handleChange}
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
        <TripHistory _trips={profile.trips} profile={profile} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ReviewList _reviews={profile.reviews} profile={profile} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Coming soon
      </TabPanel>
    </>
  );
};

export default PublicProfile;
