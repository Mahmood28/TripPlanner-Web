import React, { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
//Components
import Profile from "./Profile";
import { searchProfiles } from "store/actions/userActions";
//Styling
import {
  InputAdornment,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.userReducer);
  const [query, setQuery] = useState("");

  const delayedQuery = debounce(async () => {
    console.log(search);
    await dispatch(searchProfiles(query));
  }, 500);

  useEffect(() => {
    if (query.length) delayedQuery();

    return delayedQuery.cancel;
  }, [query]);

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="input-with-icon-adornment">
          Search for a user
        </InputLabel>
        <Input
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
          flex: 1,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {search
          ? search.map((profile) => <Profile profile={profile} type="search" />)
          : !search.length
          ? "No users found"
          : null}
      </div>
    </div>
  );
};
export default Search;
