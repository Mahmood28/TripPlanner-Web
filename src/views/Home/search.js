import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchActivity } from "store/actions/activityActions";
import { MAP_API_KEY } from "keys";
import Geocode from "react-geocode";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle.js";

const useStyles = makeStyles(styles);

export default function Search() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [destination, setDestination] = useState("");

  Geocode.setApiKey(MAP_API_KEY);
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");

  let location = "";
  let coordinates = {};
  if (destination["value"])
    location = destination["value"]["terms"][0]["value"];
  Geocode.fromAddress(location).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      coordinates = { latitude: lat, longitude: lng };
      console.log(coordinates);
    },
    (error) => {
      console.error(error);
    }
  );

  const handleSearch = () => {
    console.log(coordinates);
    dispatch(searchActivity(coordinates));
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title}>Plan your next adventure!</h2>
          <h5 className={classes.description}>
            Explore activities and create an itinerary for your trip
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody pricing plain>
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
          <Card pricing plain>
            <CardBody pricing>
              <p className={classes.cardCategory}>Start Date Here</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody pricing plain>
              <p className={classes.cardCategory}>End Date Here</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody pricing plain>
              <Button round color="warning" onClick={() => handleSearch}>
                Explore
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
