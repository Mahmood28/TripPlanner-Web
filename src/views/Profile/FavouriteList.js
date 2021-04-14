import React from "react";
import { useSelector } from "react-redux";
// Components
import GridContainer from "components/Grid/GridContainer";
import FavouriteCard from "./FavouriteCard";

const FavouriteList = ({ profile, isPublic }) => {
  const { favourites } = useSelector((state) => state.authReducer);

  const userFavourites = profile ? profile.favourites : favourites;
  return (
    <GridContainer>
      {userFavourites.map((activity) => (
        <FavouriteCard
          activity={activity}
          isPublic={isPublic}
          key={activity.id}
        />
      ))}
    </GridContainer>
  );
};

export default FavouriteList;
