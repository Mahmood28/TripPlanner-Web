import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTrip } from "store/actions/authActions";
// Components
import Button from "components/CustomButtons/Button";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import SweetAlert from "react-bootstrap-sweetalert";
import { Box } from "@material-ui/core";
import { Close } from "@material-ui/icons";

import styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle";
import dashboardStyles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

const useStyles = makeStyles(styles);
const buttonStyles = makeStyles(dashboardStyles);

const NoResultAlert = ({ alert, setAlert }) => {
  const classes = useStyles();
  const _classes = buttonStyles();
  const dispatch = useDispatch();

  if (alert === "show") {
    console.log("HI");
    setAlert(
      <Box ml={100}>
        <SweetAlert
          style={{ display: "block", marginTop: "-100px" }}
          title="No Results !"
          onConfirm={() => setAlert(null)}
          onCancel={() => setAlert(null)}
          confirmBtnCssClass={classes.button + " " + classes.warning}
        >
          We couldn't find any activities for this destination :(
        </SweetAlert>
      </Box>
    );
  }
  return (
    <>
      {/* <Button color="warning" simple onClick={deleteAlert}>
        <h1>CLICK ME</h1>
      </Button> */}
      {alert}
    </>
  );
};

export default NoResultAlert;
