import React, { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
//Components
import Profile from "./Profile";
import { searchProfiles } from "store/actions/userActions";
//Styling
import {
  InputAdornment,
  FormControl,
  InputLabel,
  Input,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {
  ProfilePicture,
  TabButton,
  CardContainer,
  StyledContainer,
  FlexContainer,
  TabContainer,
  NameContainer,
  ItemContainer,
  EditButton,
} from "./styles";
import { CalendarToday } from "@material-ui/icons";
import avatar from "assets/img/faces/avatar3.png";
import moment from "moment";
import Button from "components/CustomButtons/Button";

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useSelector((state) => state.userReducer);
  const [query, setQuery] = useState("");

  const delayedQuery = debounce(async () => {
    console.log(search);
    await dispatch(searchProfiles(query));
  }, 500);

  useEffect(() => {
    delayedQuery();

    return delayedQuery.cancel;
  }, [query]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <FormControl style={{ marginBottom: "30px" }}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Search for a user
        </InputLabel>
        <Input
          // style={{ width: "100%" }}
          id="input-with-icon-adornment"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* {search
          ? search.map((profile) => <Profile profile={profile} type="search" />)
          : !search.length
          ? "No users found"
          : null} */}
        {search.map((profile) => (
          <StyledContainer>
            <CardContainer bgcolor={"#f5f5f5"} borderRadius={16}>
              <TabContainer>
                <FlexContainer>
                  <ProfilePicture
                    src={profile.image ?? avatar}
                    alt={profile.username}
                  />
                  <NameContainer>
                    <Typography variant="h2">
                      {`${profile.firstName} ${profile.lastName}`}
                    </Typography>
                    <Typography variant="h4">{profile.username}</Typography>
                    <h6>
                      <CalendarToday size="small" />
                      {` Joined at ${moment(profile.createdAt).format("LL")}`}
                    </h6>
                  </NameContainer>
                </FlexContainer>
                <Button
                  style={{ alignSelf: "center" }}
                  color="rose"
                  round
                  onClick={() => history.push(`/profile/${profile.username}`)}
                >
                  View
                </Button>
              </TabContainer>
            </CardContainer>
          </StyledContainer>
        ))}
      </div>
    </div>
  );
};
export default Search;
