import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchActivities } from "store/actions/activityActions";
import { createTrip } from "store/actions/tripActions";
import { MAP_API_KEY } from "keys";
import Geocode from "react-geocode";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// Components
import Button from "components/CustomButtons/Button";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import AddBoxIcon from "@material-ui/icons/AddBox";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Tooltip,
} from "@material-ui/core";

import styles from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle";
import NoResultAlert from "views/Home/NoResultAlert";

const ButtonStyles = makeStyles(styles);
const useStyles = makeStyles(() => ({
  formInput: {
    marginTop: 10,
    marginBottom: 10,
    width: "70ch",
  },
}));

const ActivityForm = () => {
  const classes = useStyles();
  const _classes = ButtonStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState({ startDate: "", endDate: "" });
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(null);

  Geocode.setApiKey(MAP_API_KEY);
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");

  let city = "";
  let country = "";
  let coordinates = {};
  if (destination["value"]) {
    city = destination["value"]["terms"][0]["value"];
    country = destination["value"]["terms"][1]["value"];
  }

  Geocode.fromAddress(city).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      coordinates = { latitude: lat, longitude: lng };
    },
    (error) => {
      console.error(error);
    }
  );

  const handleChange = (event) => {
    setDates({ ...dates, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    const trip = {
      ...dates,
      destination: { ...coordinates, country, city },
    };
    const search = await dispatch(
      searchActivities(trip.destination, setAlert, history)
    );
    setOpen(search);
    if (search === false) await dispatch(createTrip(trip));
  };

  const handleCancel = () => {
    setDestination("");
    setDates({ startDate: "", endDate: "" });
    setOpen(false);
  };

  return (
    <div>
      <Tooltip
        title="Add Trip"
        placement="bottom"
        classes={{ tooltip: _classes.tooltip }}
      >
        <Button
          color="transparent"
          simple
          aria-label="addTrip"
          justIcon
          className={_classes.buttonLink}
          onClick={() => setOpen(true)}
        >
          <AddBoxIcon
            className={_classes.headerLinksSvg + " " + _classes.links}
          />
        </Button>
      </Tooltip>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          <h4>Add New Trip</h4>
        </DialogTitle>
        <DialogContent>
          <GooglePlacesAutocomplete
            apiKey={MAP_API_KEY}
            apiOptions={{ language: "eng" }}
            autocompletionRequest={{ types: ["(cities)"] }}
            selectProps={{
              destination,
              onChange: setDestination,
              placeholder: "Enter destination",
              //   styles: {
              //     option: (provided) => ({
              //       ...provided,
              //       opacity: 1,
              //       backgroundColor: "white",
              //     }),
              //     menu: (provided) => ({
              //       ...provided,
              //       opacity: 1,
              //       backgroundColor: "white",
              //     }),
              //   },
            }}
            onLoadFailed={(error) =>
              console.error("Could not inject Google script", error)
            }
          />
          <Box mt={3} mb={2}>
            <TextField
              name="startDate"
              value={dates.startDate}
              onChange={handleChange}
              label="Start Date"
              type="date"
              variant="outlined"
              size="small"
              className={classes.formInput}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box mb={2}>
            <TextField
              name="endDate"
              value={dates.endDate}
              onChange={handleChange}
              label="End Date"
              type="date"
              variant="outlined"
              size="small"
              className={classes.formInput}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <NoResultAlert alert={alert} setAlert={setAlert} />
        </DialogContent>
        <Box mr={2} mb={2}>
          <DialogActions>
            <Button onClick={handleCancel} color="rose">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="warning">
              Explore
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
};

export default ActivityForm;
