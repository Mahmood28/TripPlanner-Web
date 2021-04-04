import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../../store/actions/authActions";
// Components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import CustomInput from "components/CustomInput/CustomInput";
import InfoArea from "components/InfoArea/InfoArea";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment, Box, Icon } from "@material-ui/core";
import { Timeline, Code, Group, Face, Email } from "@material-ui/icons";

import styles from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";
const useStyles = makeStyles(styles);

const Signup = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <Card className={classes.cardSignup}>
            <h2 className={classes.cardTitle}>Sign Up</h2>
            <CardBody>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={5}>
                  {/* content shoud be changed */}
                  <InfoArea
                    title="Marketing"
                    description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                    icon={Timeline}
                    iconColor="rose"
                  />
                  <InfoArea
                    title="Fully Coded in HTML5"
                    description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                    icon={Code}
                    iconColor="primary"
                  />
                  <InfoArea
                    title="Built Audience"
                    description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                    icon={Group}
                    iconColor="info"
                  />
                </GridItem>
                <GridItem xs={12} sm={8} md={5}>
                  <form className={classes.form}>
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        name: "firstName",
                        onChange: handleChange,
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            {/* remove comment */}
                            {/* <Face className={classes.inputAdornmentIcon} /> */}
                          </InputAdornment>
                        ),
                        placeholder: "First Name",
                      }}
                    />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        name: "lastName",
                        onChange: handleChange,
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            {/* remove comment */}
                            {/* <Face className={classes.inputAdornmentIcon} /> */}
                          </InputAdornment>
                        ),
                        placeholder: "Last Name",
                      }}
                    />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        name: "username",
                        onChange: handleChange,
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "Username",
                      }}
                    />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        name: "email",
                        onChange: handleChange,
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <Email className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "Email",
                      }}
                    />
                    <CustomInput
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        name: "password",
                        onChange: handleChange,
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <Icon className={classes.inputAdornmentIcon}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        placeholder: "Password",
                        type: "password",
                        autoComplete: "off",
                      }}
                    />
                    <Box mt={2} ml={2}>
                      {/* remove inline style */}
                      <a href="/signin" style={{ color: "#e91e63" }}>
                        Already have an account? Signin
                      </a>
                    </Box>
                    <div className={classes.center}>
                      <Box mt={4} ml={6}>
                        <Button round color="warning" onClick={handleSubmit}>
                          Get started
                        </Button>
                      </Box>
                    </div>
                  </form>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Signup;
