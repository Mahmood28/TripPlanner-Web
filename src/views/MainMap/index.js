import React, { useState } from "react";
import { useSelector } from "react-redux";
// Components
import Loading from "components/Loading";
import Map from "./Map";
//Styling
import { TextField, Slider, Typography, Button } from "@material-ui/core";
import { Tune, Star } from "@material-ui/icons/";
import { DialogContainer, FilterContainer, StyledRating } from "./styles";
import { Redirect } from "react-router";

const MainMap = () => {
  const { activities } = useSelector((state) => state.activity);
  const activeTrip = JSON.parse(localStorage.getItem("ActiveTrip"));
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
        <Typography variant="h3">
          Explore Activities in {location.city}
        </Typography>
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
      <Map
        isMarkerShown
        lat={location.latitude}
        lng={location.longitude}
        filter={filter}
        activities={activities}
      />
    </>
  );
};

export default MainMap;
