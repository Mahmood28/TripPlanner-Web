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

const DeleteAlert = ({ tripId }) => {
  const classes = useStyles();
  const _classes = buttonStyles();
  const dispatch = useDispatch();

  const [alert, setAlert] = useState(null);

  const deleteAlert = () => {
    setAlert(
      <Box ml={100}>
        <SweetAlert
          warning
          title="Are you sure?"
          onConfirm={() => successDelete()}
          onCancel={() => setAlert(null)}
          confirmBtnCssClass={classes.button + " " + classes.success}
          cancelBtnCssClass={classes.button + " " + classes.danger}
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          showCancel
        >
          You will not be able to recover this trip.
        </SweetAlert>
      </Box>
    );
  };

  const successDelete = () => {
    dispatch(deleteTrip(tripId));
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Deleted!"
        onConfirm={() => setAlert(null)}
        onCancel={() => setAlert(null)}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        Your trip has been deleted.
      </SweetAlert>
    );
  };

  return (
    <>
      <Button color="rose" simple justIcon onClick={deleteAlert}>
        <Close className={_classes.underChartIcons} />
      </Button>
      {alert}
    </>
  );
};

export default DeleteAlert;
