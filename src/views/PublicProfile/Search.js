import React, { useEffect, useState } from "react";
import moment from "moment";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchProfiles } from "store/actions/userActions";
import { followUser, unfollowUser } from "store/actions/authActions";
// Components
import Loader from "components/Loading/Loader";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
// Styling
import { InputAdornment, InputLabel, Input, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {
  ProfilePicture,
  CardContainer,
  StyledContainer,
  FlexContainer,
  TabContainer,
  NameContainer,
  DisplayMessage,
  SearchContainer,
  StyledButton,
  PageContainer,
  FollowButtonStyled,
} from "./styles";
import { CalendarToday } from "@material-ui/icons";
import avatar from "assets/img/faces/avatar3.png";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.userReducer);
  const { user, following } = useSelector((state) => state.authReducer);
  const [query, setQuery] = useState("");
  const [queryEnd, setQueryEnd] = useState(false);

  const delayedQuery = debounce(async () => {
    await dispatch(searchProfiles(query));
    setQueryEnd(true);
  }, 500);

  useEffect(() => {
    setQueryEnd(false);
    delayedQuery();

    return delayedQuery.cancel;
  }, [query]);

  return (
    <PageContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <SearchContainer>
            <InputLabel htmlFor="input-with-icon-adornment">
              Connect with other travellers
            </InputLabel>
            <Input
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              fullWidth
              autoFocus
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </SearchContainer>
        </GridItem>
      </GridContainer>
      <div>
        {!query ? null : search.length ? (
          search.map((profile) => {
            const unfollow = following.length
              ? following.some((_user) => _user.username === profile.username)
              : false;
            return (
              <StyledContainer>
                <CardContainer>
                  <TabContainer>
                    <FlexContainer>
                      <Link to={`/profile/${profile.username}`}>
                        <ProfilePicture
                          src={profile.image ?? avatar}
                          alt={profile.username}
                        />
                      </Link>
                      <NameContainer>
                        <h3>
                          {profile.firstName} {profile.lastName}
                        </h3>
                        <h4>{profile.username}</h4>
                        <Box display="flex">
                          <Box mt={1} mr={1}>
                            <CalendarToday style={{ fontSize: 15 }} />
                          </Box>
                          <h6>
                            {` Joined at ${moment(profile.createdAt).format(
                              "LL"
                            )}`}
                          </h6>
                        </Box>
                      </NameContainer>
                    </FlexContainer>
                    {user.username !== profile.username &&
                      (unfollow ? (
                        <FollowButtonStyled
                          round
                          onClick={() =>
                            dispatch(unfollowUser(user, profile.username))
                          }
                        />
                      ) : (
                        <StyledButton
                          color="rose"
                          round
                          onClick={() =>
                            dispatch(followUser(user, profile.username))
                          }
                        >
                          Follow
                        </StyledButton>
                      ))}
                  </TabContainer>
                </CardContainer>
              </StyledContainer>
            );
          })
        ) : queryEnd ? (
          <DisplayMessage>No users found.</DisplayMessage>
        ) : (
          <Loader />
        )}
      </div>
    </PageContainer>
  );
};
export default Search;
