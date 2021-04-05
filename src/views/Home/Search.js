import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchActivities } from "store/actions/activityActions";
import { createTrip } from "store/actions/tripActions";

import { MAP_API_KEY } from "keys";
import Geocode from "react-geocode";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import Datetime from "react-datetime";
import moment from "moment";
// Components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  TextField,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";

import styles from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle";

const useStyles = makeStyles(styles);

const Search = () => {
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

  const yesterday = moment().subtract(1, "day");
  function valid(current) {
    return current.isAfter(yesterday);
  }

  const handleChange = (event) => {
    setDates({ ...dates, [event.target.name]: event.target.value });
  };

  const handleSearch = async () => {
    const trip = {
      ...dates,
      destination: { ...coordinates, country, city },
    };
    setLoading(true);
    await dispatch(searchActivities(trip.destination));
    await dispatch(createTrip(trip));
    history.push("/explore");
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title}>Plan your next adventure!</h2>
          {/* <h5 className={classes.description}>
            Explore activities and create an itinerary for your trip
          </h5> */}
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <CardBody pricing>
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
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <CardBody>
              {/* <InputLabel style={{color: "white"}}>Start Date</InputLabel> */}
              {/* <Datetime
                // initialValue={new Date()}
                isValidDate={valid}
                timeFormat={false}
                onChange={(e) => setStartDate(e)}
                inputProps={{
                  placeholder: "Start date",
                }}
                onChange={(date) => setStartDate(date)}
              /> */}
              <TextField
                name="startDate"
                value={dates.startDate}
                onChange={handleChange}
                // label="Start Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <CardBody>
              {/* <Datetime
                // initialValue={new Date()}
                isValidDate={valid}
                timeFormat={false}
                // dateFormat="MM/dd/yyyy"
                inputProps={{
                  placeholder: "End date",
                }}
                onChange={(date) => console.log(date)}
              /> */}
              <TextField
                name="endDate"
                value={dates.endDate}
                onChange={handleChange}
                // label="End Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={1}>
          <Card plain>
            <CardBody plain>
              <Button round color="warning" onClick={handleSearch}>
                Explore
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      {loading && (
        <Backdrop open={loading} onClick={() => setLoading(false)}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
};

export default Search;
