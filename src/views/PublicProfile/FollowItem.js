import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "store/actions/authActions";
// Components
import Button from "components/CustomButtons/Button";
// Styling
import { UserImage, FollowButton } from "./styles";
import { Box, TableCell, TableRow } from "@material-ui/core";

const FollowItem = ({ user }) => {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.authReducer.user);
  const { following } = useSelector((state) => state.authReducer);

  const unfollow = following.length
    ? following.some((_user) => _user.username === user.username)
    : false;

  return (
    <TableRow>
      <TableCell>
        <Box display="flex">
          <Link to={`/profile/${user.username}`}>
            <UserImage src={user.image} alt={user.username} />
          </Link>
          <Box ml={4}>
            <h5>{user.username}</h5>
            <h6>
              {user.firstName} {user.lastName}
            </h6>
          </Box>
        </Box>
      </TableCell>

      <TableCell align="right">
        {activeUser.username !== user.username &&
          (unfollow ? (
            <FollowButton
              round
              onClick={() => dispatch(unfollowUser(activeUser, user.username))}
            />
          ) : (
            <Button
              color="rose"
              round
              onClick={() => dispatch(followUser(activeUser, user.username))}
            >
              Follow
            </Button>
          ))}
      </TableCell>
    </TableRow>
  );
};

export default FollowItem;
