import React from "react";
import { useHistory } from "react-router";
import moment from "moment";
// Styling
import avatar from "assets/img/faces/avatar3.png";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardAvatar from "components/Card/CardAvatar";
import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles";
import { Box, makeStyles } from "@material-ui/core";
import { CalendarToday } from "@material-ui/icons";

const useStyles = makeStyles(styles);

const Profile = ({ profile, type }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <Card profile style={{ width: "100%", margin: "30px" }}>
        <CardAvatar profile>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img src={avatar} alt={profile.username} />
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

          <Button
            color="rose"
            round
            onClick={() => history.push(`/profile/${profile.username}`)}
          >
            {type === "search" ? "View" : "Follow"}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Profile;
