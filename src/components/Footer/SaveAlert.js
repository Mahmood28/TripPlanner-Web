import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// Components
import Button from "components/CustomButtons/Button";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import SweetAlert from "react-bootstrap-sweetalert";

import styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle";
const useStyles = makeStyles(styles);

const SaveAlert = () => {
  const classes = useStyles();
  const history = useHistory();
  const [alert, setAlert] = useState(null);

  const successAlert = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Your trip is saved!"
        onConfirm={() => history.push("/trips-history")}
        onCancel={() => setAlert(null)}
        confirmBtnCssClass={classes.button + " " + classes.success}
      ></SweetAlert>
    );
  };

  return (
    <>
      {alert}
      <Button color="warning" onClick={successAlert}>
        Save Trip
      </Button>
    </>
  );
};

export default SaveAlert;
