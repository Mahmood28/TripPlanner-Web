import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "store/actions/authActions";
// Components
import FollowDialog from "views/PublicProfile/FollowDialog";
// Styling
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardAvatar from "components/Card/CardAvatar";
import { Box, makeStyles } from "@material-ui/core";
import { CalendarToday } from "@material-ui/icons";
import { FollowButton } from "./styles";
import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles";

const useStyles = makeStyles(styles);

const Profile = ({ profile }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user, following, followers } = useSelector(
    (state) => state.authReducer
  );

  const unfollow = following.length
    ? following.some((_user) => _user.username === profile.username)
    : false;

  const isUser = profile.username === user.username;

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
            <FollowDialog
              users={isUser ? following : profile.following}
              isFollowers={false}
            />
            <FollowDialog
              users={isUser ? followers : profile.followers}
              isFollowers={true}
            />
          </Box>
          <Box>
            {!isUser &&
              (unfollow ? (
                <FollowButton
                  round
                  onClick={() => dispatch(unfollowUser(user, profile.username))}
                />
              ) : (
                <Button
                  color="rose"
                  round
                  onClick={() => dispatch(followUser(user, profile.username))}
                >
                  Follow
                </Button>
              ))}
          </Box>
        </CardBody>
      </Card>
    </div>
  );
};

export default Profile;
