import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addActivity } from "store/actions/tripActions";
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
import { useToasts } from "react-toast-notifications";

const useStyles = makeStyles(() => ({
  formInput: {
    marginTop: 10,
    marginBottom: 10,
    width: "70ch",
  },
}));

const ActivityForm = ({ day, dayId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const [activity, setActivity] = useState({});
  const [event, setEvent] = useState({});
  const [open, setOpen] = useState(false);

  const tripId = JSON.parse(localStorage.getItem("activeTrip")).id;

  const handleChange = (event) => {
    setActivity({ ...activity, [event.target.name]: event.target.value });
  };

  const handleCancel = () => {
    setOpen(false);
    setEvent({});
    setActivity({});
  };

  const handleSubmit = () => {
    activity.activityId = event.id;
    const newActivity = { tripId, day, activity, dayId };
    dispatch(addActivity(newActivity, addToast));
    setOpen(false);
    setEvent({});
    setActivity({});
  };

  return (
    <div>
      <Button color="rose" round onClick={() => setOpen(true)}>
        Add Activity
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          <h4>Add Activity to Day {day}</h4>
        </DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            value={activity.name}
            onChange={handleChange}
            label="Activity"
            type="text"
            autoComplete="off"
            placeholder="add a custom title to your activity"
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
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ActivityForm;
