import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import Primary from "components/Typography/Primary.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";

// Store
import { signin } from "../../store/actions/authActions";
import { Box } from "@material-ui/core";

// REVIEW: cleanup imports

const useStyles = makeStyles(styles);

export default function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();


  // REVIEW: Hooks are used at the top of a component 
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  // REVIEW: REmove {}
  const handleSubmit = () => {
    dispatch(signin(user, history));
  };

  useEffect(() => {
    // REVIEW: USe arrows
    let id = setTimeout(function () {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });
  // REVIEW: put the 2 useStyles under each other
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
            <Card login className={classes[cardAnimaton]}>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="warning"
              >
                <h4 className={classes.cardTitle}>Sign In</h4>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText="Username"
                  id="username"
                  name="username"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "username",
                    onChange: handleChange,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                  }}
                />
                <CustomInput
                  labelText="Password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "password",
                    onChange: handleChange,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>
                          lock_outline
                        </Icon>
                      </InputAdornment>
                    ),
                    type: "password",
                    autoComplete: "off",
                  }}
                  onChange={handleChange}
                />
                <a href="/signup" style={{ color: "#e91e63" }}>
                  Don't have an account? Signup
                </a>
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button
                  color="warning"
                  simple
                  size="lg"
                  block
                  onClick={handleSubmit}
                >
                  Let's Go
                </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
