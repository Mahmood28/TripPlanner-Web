import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
// Styling
import { Typography } from "@material-ui/core";
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
import ReviewsList from "./ReviewsList";

const Profile = () => {
  const { user } = useSelector((state) => state.authReducer);
  const history = useHistory();

  const initialState = {
    reviews: false,
    trips: false,
    favorites: false,
  };
  const [show, setShow] = useState(initialState);

  const handleShow = (category) => {
    setShow({ ...initialState, [category]: true });
  };

  const tabButtons = [];
  for (const key in show) {
    tabButtons.push(
      <TabButton shown={show[key]} onClick={() => handleShow(key)}>
        {key}
      </TabButton>
    );
  }

  if (!user) return <Redirect to="/home" />;
  return (
    <StyledContainer>
      <CardContainer bgcolor={"#f5f5f5"} borderRadius={16}>
        <TabContainer>
          <FlexContainer>
            <ProfilePicture
              src={
                user.picture ??
                "https://vectorified.com/images/generic-avatar-icon-12.jpg"
              }
              alt={user.username}
            />
            <NameContainer>
              <Typography variant="h2">
                {`${user.firstName} ${user.lastName}`}
              </Typography>
              <Typography variant="h4">{user.username}</Typography>
            </NameContainer>
          </FlexContainer>
          <EditButton onClick={() => history.push("/profile/edit")}>
            Edit
          </EditButton>
        </TabContainer>
      </CardContainer>
      <ItemContainer>
        <CardContainer bgcolor={"#f5f5f5"} borderRadius={16}>
          <TabContainer>{tabButtons}</TabContainer>
        </CardContainer>
      </ItemContainer>
      <ItemContainer>
        <Typography variant="body1" align="center">
          {show.reviews && <ReviewsList />}
          {show.favorites && "No favorites added."}
          {show.trips && "No trips added."}
        </Typography>
      </ItemContainer>
    </StyledContainer>
  );
};

export default Profile;
