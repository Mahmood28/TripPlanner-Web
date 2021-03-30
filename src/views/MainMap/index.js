import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchItinerary } from "store/actions/tripActions";
// Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import Loading from "components/Loading";
import Map from "./Map";
// Styling
import { TextField, Slider, Typography, Button } from "@material-ui/core";
import { Tune, Star } from "@material-ui/icons/";
import { DialogContainer, FilterContainer, StyledRating } from "./styles";
import { Redirect } from "react-router";

const MainMap = () => {
  const dispatch = useDispatch();

  const { activities } = useSelector((state) => state.activity);
  const activeTrip = JSON.parse(localStorage.getItem("activeTrip"));
  dispatch(fetchItinerary({ id: activeTrip.id }));

  const maxPrice = Math.max(
    ...activities.map((activity) => +activity.price.amount)
  );
  const initialFilter = {
    price: [0, Infinity],
    rating: 0,
    query: "",
  };
  const [shown, setShown] = useState(false);
  const [filter, setFilter] = useState(initialFilter);

  if (!activeTrip) return <Redirect to="/home" />;
  if (activities.length === 0) return <Loading />;

  const location = activeTrip.destination;

  return (
    <>
      <DialogContainer>
        <h3>Explore Activities in {location.city}</h3>
        <Button onClick={() => setShown(!shown)}>
          <Tune />
        </Button>
      </DialogContainer>
      {shown && (
        <FilterContainer>
          <TextField
            id="standard-search"
            label="Search for an activity"
            type="search"
            value={filter.query}
            onChange={(event) =>
              setFilter({ ...filter, query: event.target.value })
            }
          />
          <div>
            <Typography style={{ textAlign: "center" }} gutterBottom>
              Price Range (EUR)
            </Typography>
            <Slider
              value={filter.price}
              onChange={(event, price) => setFilter({ ...filter, price })}
              step={10}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              max={Math.round(maxPrice + 10)}
              style={{ width: "200px", marginLeft: "30px" }}
            />
          </div>
          <div>
            <Typography style={{ textAlign: "center" }} gutterBottom>
              Rating
            </Typography>
            <StyledRating
              name="simple-controlled"
              value={filter.rating}
              onChange={(event, rating) => setFilter({ ...filter, rating })}
              precision={0.5}
              icon={<Star fontSize="30px" />}
            />
          </div>
          <Button contained onClick={() => setFilter(initialFilter)}>
            Reset Filters
          </Button>
        </FilterContainer>
      )}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <Map
                isMarkerShown
                lat={location.latitude}
                lng={location.longitude}
                filter={filter}
                activities={activities}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
};

export default MainMap;
