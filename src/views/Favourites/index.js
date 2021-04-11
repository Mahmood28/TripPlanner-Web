import React from "react";
import { useSelector } from "react-redux";
// Components
import GridContainer from "components/Grid/GridContainer";
import ActivityCard from "./ActivityCard";
// Styling

const Favourites = () => {
  const { favourites } = useSelector((state) => state.authReducer);

  return (
    <GridContainer>
      {favourites.map((activity) => (
        <ActivityCard activity={activity} key={activity.id} />
      ))}
    </GridContainer>
  );
};

export default Favourites;
