import React from "react";
import { useDispatch } from "react-redux";
import { deleteActivity } from "store/actions/tripActions";
// Components
import Button from "components/CustomButtons/Button";
import EditForm from "views/Itinerary/EditForm";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Close } from "@material-ui/icons";

import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle";
const useStyles = makeStyles(styles);

const Buttons = ({ activityNum, day, dayId, activityId, addToast }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Box display="flex" flexDirection="row-reverse">
      <Button
        color="rose"
        simple
        className={classes.actionButton}
        onClick={() =>
          dispatch(deleteActivity({ dayId, activityId }, addToast))
        }
      >
        <Close className={classes.icon} />
      </Button>
      <EditForm
        activityNum={activityNum}
        day={day}
        activityId={activityId}
        key={activityId}
        addToast={addToast}
      />
    </Box>
  );
};

export default Buttons;
