import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// Components
import Button from "components/CustomButtons/Button";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import SweetAlert from "react-bootstrap-sweetalert";

import styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle";
const useStyles = makeStyles(styles);

const AuthAlert = () => {
  const classes = useStyles();
  const history = useHistory();
  const [alert, setAlert] = useState(null);

  const signinAlert = () => {
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="Signin to save your trip!"
        onConfirm={() => history.push("/signin")}
        onCancel={() => setAlert(null)}
        confirmBtnCssClass={classes.button + " " + classes.warning}
        confirmBtnText="Sign in"
        // showCancel
      ></SweetAlert>
    );
  };

  return (
    <>
      {alert}
      <Button color="warning" onClick={signinAlert}>
        Save Trip
      </Button>
    </>
  );
};

export default AuthAlert;
