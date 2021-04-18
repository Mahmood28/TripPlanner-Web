import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchActivities } from "store/actions/activityActions";
import { createTrip } from "store/actions/tripActions";
import { MAP_API_KEY } from "keys";
import Geocode from "react-geocode";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// Components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Backdrop, Box } from "@material-ui/core";
import BeatLoader from "react-spinners/BeatLoader";

import styles from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle";
const useStyles = makeStyles(styles);

const Search = ({ setAlert }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState({ startDate: "", endDate: "" });
  const [loading, setLoading] = useState(false);

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

  const handleSearch = async () => {
    const trip = {
      ...dates,
      destination: { ...coordinates, country, city },
    };
    setLoading(true);
    const search = await dispatch(
      searchActivities(trip.destination, setAlert, history)
    );
    setLoading(!search);
    if (search === false) {
      await dispatch(createTrip(trip));
      history.push("/explore");
    }
    setDates({ startDate: "", endDate: "" });
    setDestination("");
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <h2 className={classes.title}>Plan your next adventure !</h2>
          <h5 className={classes.description}>
            Explore activities and create an itinerary for your upcoming trip.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <Card style={{ borderRadius: "40px" }}>
            <Box display="flex" m={2}>
              <Box style={{ width: 220 }} ml={4.5} mt={0.8} mr={3}>
                <GooglePlacesAutocomplete
                  apiKey={MAP_API_KEY}
                  apiOptions={{ language: "eng" }}
                  autocompletionRequest={{ types: ["(cities)"] }}
                  selectProps={{
                    destination,
                    onChange: setDestination,
                    placeholder: "Enter destination",
                  }}
                  onLoadFailed={(error) =>
                    console.error("Could not inject Google script", error)
                  }
                />
              </Box>
              <Box mt={0.8} mr={3}>
                <TextField
                  name="startDate"
                  value={dates.startDate}
                  onChange={handleChange}
                  label="Start Date"
                  type="date"
                  variant="outlined"
                  size="small"
                  style={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box mt={0.8} mr={3}>
                <TextField
                  name="endDate"
                  value={dates.endDate}
                  onChange={handleChange}
                  label="End Date"
                  type="date"
                  variant="outlined"
                  size="small"
                  style={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Button round color="warning" onClick={handleSearch}>
                Explore
              </Button>
            </Box>
          </Card>
        </GridItem>
      </GridContainer>
      {loading && (
        <Backdrop open={loading} onClick={() => setLoading(false)}>
          <BeatLoader color="white" />
        </Backdrop>
      )}
    </div>
  );
};

export default Search;
