import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateActivity } from "store/actions/tripActions";
// Components
import Button from "components/CustomButtons/Button";
import Accordion from "components/Accordion/Accordion";
import ActivityList from "views/Itinerary/ActivityList";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";

import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle";
const useStyles = makeStyles(styles);

const inputStyles = makeStyles(() => ({
  formInput: {
    marginTop: 10,
    marginBottom: 10,
    width: "70ch",
  },
}));

const EditForm = ({ activityNum, day, activityId, addToast }) => {
  const _classes = useStyles();
  const classes = inputStyles();
  const dispatch = useDispatch();

  const foundActivity = day.activities.find(
    (activity) => activity.id === activityId
  );

  const currActivity = {
    dayId: day.id,
    activityId,
    name: foundActivity.dayActivity.name,
    startTime: foundActivity.dayActivity.startTime,
    endTime: foundActivity.dayActivity.endTime,
  };

  const [activity, setActivity] = useState(currActivity);
  const [event, setEvent] = useState(foundActivity);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    activity.name = event.name;
  }, [event]);

  const handleCancel = () => {
    setOpen(false);
    setEvent(foundActivity);
    setActivity(currActivity);
  };

  const handleChange = (event) => {
    setActivity({ ...activity, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    const newActivity = { ...activity, dayId: day.id, activityId: event.id };
    dispatch(updateActivity(currActivity, newActivity, addToast));
    setOpen(false);
    setActivity(newActivity);
  };

  return (
    <div>
      <Button
        color="warning"
        simple
        className={_classes.actionButton}
        onClick={() => setOpen(true)}
      >
        <Edit className={classes.icon} />
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          <h4>
            Edit Activity {activityNum} of Day {day.day}
          </h4>
        </DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            value={activity.name}
            onChange={handleChange}
            label="Activity"
            type="text"
            autoComplete="off"
            className={classes.formInput}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="startTime"
            value={activity.startTime}
            onChange={handleChange}
            label="Start Time"
            type="time"
            defaultValue={new Date()}
            className={classes.formInput}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="endTime"
            value={activity.endTime}
            onChange={handleChange}
            label="End Time"
            type="time"
            defaultValue={new Date()}
            className={classes.formInput}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Accordion
            active={0}
            collapses={[
              {
                title: "Select Activity",
                content: <ActivityList event={event} setEvent={setEvent} />,
              },
            ]}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="rose">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="warning">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditForm;
