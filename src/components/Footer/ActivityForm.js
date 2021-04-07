import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivity } from "store/actions/tripActions";
// Components
import Button from "components/CustomButtons/Button";
import Accordion from "components/Accordion/Accordion";
import ActivityList from "views/Itinerary/ActivityList";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
} from "@material-ui/core";
import { useToasts } from "react-toast-notifications";

const useStyles = makeStyles(() => ({
  formInput: {
    marginTop: 10,
    marginBottom: 10,
    width: "70ch",
  },
}));

const ActivityForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const { itinerary } = useSelector((state) => state.tripReducer);

  const [activity, setActivity] = useState({});
  const [event, setEvent] = useState({});
  const [open, setOpen] = useState(false);

  let days = [];
  if (itinerary.days) {
    days = itinerary.days.map((day) => ({
      title: `Day ${day.day} (${day.date.split("-").reverse().join("-")})`,
      day: day.day,
      dayId: day.id,
    }));
  }

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
    const newActivity = { tripId, activity };
    newActivity.day = newActivity.activity.day;
    newActivity.dayId = newActivity.activity.dayId;
    delete newActivity.activity.day;
    delete newActivity.activity.dayId;
    dispatch(addActivity(newActivity, addToast));
    setOpen(false);
    setEvent({});
    setActivity({});
  };

  return (
    <div>
      <Button color="rose" onClick={() => setOpen(true)}>
        Add Activity
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          <h4>Add Activity</h4>
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
          <Box mb={1.5}>
            <Autocomplete
              id="date"
              onChange={(event, newValue) => {
                setActivity({
                  ...activity,
                  day: newValue.day,
                  dayId: newValue.dayId,
                });
              }}
              options={days}
              getOptionLabel={(option) => option.title}
              className={classes.formInput}
              renderInput={(params) => <TextField {...params} label="Day" />}
            />
          </Box>
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
                content: (
                  <ActivityList
                    event={event}
                    setEvent={setEvent}
                    isMap={true}
                    setOpen={setOpen}
                  />
                ),
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
