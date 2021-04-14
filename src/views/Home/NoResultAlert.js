import React from "react";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import SweetAlert from "react-bootstrap-sweetalert";
import { Box } from "@material-ui/core";

import styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle";
const useStyles = makeStyles(styles);

const NoResultAlert = ({ alert, setAlert }) => {
  const classes = useStyles();

  if (alert === "show") {
    setAlert(
      <Box ml={100}>
        <SweetAlert
          style={{ display: "block", marginTop: "-100px" }}
          title="No Results !"
          onConfirm={() => setAlert(null)}
          onCancel={() => setAlert(null)}
          confirmBtnCssClass={classes.button + " " + classes.warning}
        >
          We could not find any activities for this destination :(
        </SweetAlert>
      </Box>
    );
  }
  return <>{alert}</>;
};

export default NoResultAlert;
