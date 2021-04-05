import React, { useState } from "react";
import { useSelector } from "react-redux";

// Components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import Loading from "components/Loading";
import Map from "./Map";

// Styling
import { TextField, Button } from "@material-ui/core";
import { Tune, Star } from "@material-ui/icons/";
import {
  DialogContainer,
  FilterContainer,
  StyledFilterText,
  StyledPrice,
  StyledRating,
} from "./styles";
import { Redirect } from "react-router";

const MainMap = () => {
  const { activities } = useSelector((state) => state.activityReducer);
  const { trip } = useSelector((state) => state.tripReducer);

  const initialFilter = {
    price: [0, Infinity],
    rating: 0,
    query: "",
  };
  const [shown, setShown] = useState(false);
  const [filter, setFilter] = useState(initialFilter);

  if (!trip) return <Redirect to="/home" />;
  if (activities.length === 0) return <Loading />;

  const maxPrice = Math.max(
    ...activities.map((activity) => +activity.price.amount)
  );

  const location = trip.destination;

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
            <StyledFilterText gutterBottom>Price Range (EUR)</StyledFilterText>
            <StyledPrice
              value={filter.price}
              onChange={(event, price) => setFilter({ ...filter, price })}
              step={10}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              max={Math.round(maxPrice + 10)}
            />
          </div>
          <div>
            <StyledFilterText gutterBottom>Rating</StyledFilterText>
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
