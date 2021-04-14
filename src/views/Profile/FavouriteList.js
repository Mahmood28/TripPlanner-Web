import React from "react";
import { useSelector } from "react-redux";
// Components
import GridContainer from "components/Grid/GridContainer";
import FavouriteCard from "./FavouriteCard";

const FavouriteList = ({ profile }) => {
  const { favourites, user } = useSelector((state) => state.authReducer);

  const userFavourites = profile ? profile.favourites : favourites;
  return (
    <GridContainer>
      {userFavourites.map((activity) => (
        <FavouriteCard activity={activity} key={activity.id} user={user} />
      ))}
    </GridContainer>
  );
};

export default FavouriteList;
