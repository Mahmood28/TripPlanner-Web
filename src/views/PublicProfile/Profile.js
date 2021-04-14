import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "store/actions/authActions";
// Components
import FollowDialog from "views/PublicProfile/FollowDialog";
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

const Profile = ({ profile }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user, following } = useSelector((state) => state.authReducer);

  const unfollow = following.length
    ? following.some((_user) => _user.username === profile.username)
    : false;

  return (
    <div>
      <Card profile>
        <CardAvatar profile>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img src={profile.image} alt={profile.username} />
          </a>
        </CardAvatar>
        <CardBody profile>
          <h3 className={classes.cardTitle}>{profile.username}</h3>
          <h4 className={classes.cardTitle}>
            {profile.firstName} {profile.lastName}
          </h4>
          <Box display="flex" justifyContent="center" mt={2}>
            <Box mt={1} mr={1}>
              <CalendarToday style={{ fontSize: 15 }} />
            </Box>
            <h6>{` Joined at ${moment(profile.createdAt).format("LL")}`}</h6>
          </Box>
          <Box mt={3} mb={3}>
            <p className={classes.description}>{profile.bio ?? ""}</p>
          </Box>
          <Box display="flex" justifyContent="center">
            <FollowDialog users={profile.followers} isFollowers={true} />
            <FollowDialog users={profile.following} isFollowers={false} />
            <Box ml={3} mr={2}>
              {user.username !== profile.username && (
                <Button
                  color={unfollow ? "" : "rose"}
                  round
                  onClick={() =>
                    dispatch(
                      unfollow
                        ? unfollowUser(user, profile.username)
                        : followUser(user, profile.username)
                    )
                  }
                >
                  {unfollow ? "Following" : "Follow"}
                </Button>
              )}
            </Box>
          </Box>
        </CardBody>
      </Card>
    </div>
  );
};

export default Profile;
