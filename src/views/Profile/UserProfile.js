import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useDispatch } from "react-redux";
import { updateProfile } from "store/actions/authActions";
// Components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import CustomInput from "components/CustomInput/CustomInput";
import Clearfix from "components/Clearfix/Clearfix";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import CardIcon from "components/Card/CardIcon";
import CardAvatar from "components/Card/CardAvatar";
import PictureUpload from "components/CustomUpload/PictureUpload";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel, Box, Typography, Grid } from "@material-ui/core";
import { PermIdentity } from "@material-ui/icons";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles";
import { Link } from "react-router-dom";
const useStyles = makeStyles(styles);

const UserProfile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);

  let currProfile = {
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    image: user.image,
    bio: user.bio ?? "",
  };

  useEffect(() => {
    setProfile(currProfile);
  }, [user]);

  const [disabled, setDisabled] = useState(true);
  const [profile, setProfile] = useState(currProfile);

  const handleChange = (event) =>
    setProfile({ ...profile, [event.target.name]: event.target.value });

  const handleCancel = () => {
    setProfile(currProfile);
    setDisabled(true);
  };

  const handleSubmit = () => {
    dispatch(updateProfile(profile));
    setProfile(currProfile);
    setDisabled(true);
  };

  if (!user) return <Redirect to="/404" />;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <PermIdentity />
              </CardIcon>
            </CardHeader>
            <CardBody>
              <Box mt={2}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="First Name"
                      id="firstName"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        name: "firstName",
                        value: profile.firstName,
                        onChange: handleChange,
                        disabled: disabled,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Last Name"
                      id="lastName"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        name: "lastName",
                        value: profile.lastName,
                        onChange: handleChange,
                        disabled: disabled,
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </Box>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      name: "username",
                      value: profile.username,
                      onChange: handleChange,
                      disabled: disabled,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      name: "email",
                      value: profile.email,
                      onChange: handleChange,
                      disabled: disabled,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Box mt={6}>
                    <InputLabel style={{ color: "#AAAAAA" }}>
                      About me
                    </InputLabel>
                    <CustomInput
                      labelText={
                        (!user.bio || user.bio.length === 0) &&
                        "Add a fun bio to your public profile ..."
                      }
                      id="about-me"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        name: "bio",
                        value: profile.bio,
                        onChange: handleChange,
                        disabled: disabled,
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </Box>
                </GridItem>
              </GridContainer>
              {disabled ? (
                <Button
                  color="rose"
                  className={classes.updateProfileButton}
                  onClick={() => setDisabled(false)}
                >
                  Edit Profile
                </Button>
              ) : (
                <>
                  <Button
                    color="warning"
                    className={classes.updateProfileButton}
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                  <Button
                    color="rose"
                    className={classes.updateProfileButton}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </>
              )}
              <Clearfix />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              {disabled ? (
                <div>
                  <img src={profile.image} alt={user.username} />
                </div>
              ) : (
                <PictureUpload profile={profile} setProfile={setProfile} />
              )}
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>
                {profile.firstName} {profile.lastName}
              </h4>
              <Box mt={3} mb={3}>
                <p className={classes.description}>{profile.bio}</p>
              </Box>
              <Link to={`/profile/${user.username}`}>
                <Button color="rose" round>
                  Public Profile
                </Button>
              </Link>

              <Box mt={4}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Grid item onClick={() => console.log("show followers")}>
                    <PeopleOutlineIcon color="secondary" />
                    <Typography variant="body1" gutterBottom>
                      Followers
                    </Typography>
                  </Grid>
                  <Grid item onClick={() => console.log("show following")}>
                    <PeopleOutlineIcon color="secondary" />
                    <Typography variant="body1" gutterBottom>
                      Following
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default UserProfile;
