import React from "react";
import { useSelector } from "react-redux";
// Components
import GridContainer from "components/Grid/GridContainer";
import ActivityCard from "./ActivityCard";
// Styling

const Favourites = ({ profile }) => {
  const { favourites, user } = useSelector((state) => state.authReducer);

  const userFavourites = profile ? profile.favourites : favourites;
  return (
    <GridContainer>
      {userFavourites.map((activity) => (
        <ActivityCard activity={activity} key={activity.id} user={user} />
      ))}
    </GridContainer>
  );
};

export default Favourites;
