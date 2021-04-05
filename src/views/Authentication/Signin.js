import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin } from "../../store/actions/authActions";

// Components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import CardFooter from "components/Card/CardFooter";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment, Icon } from "@material-ui/core";
import { Face } from "@material-ui/icons";
import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle";
import { AuthMsg } from "./styles";

const useStyles = makeStyles(styles);

const Signin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = () => {
    dispatch(signin(user, history));
  };

  useEffect(() => {
    let id = setTimeout(function () {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });

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
                <AuthMsg href="/signup">Don't have an account? Signup</AuthMsg>
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
};

export default Signin;
