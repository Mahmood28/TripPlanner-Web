import React, { useState } from "react";
import { useSelector } from "react-redux";
// Components
import Map from "./Map";
//Styling
import { TextField, Slider, Typography, Button, Box } from "@material-ui/core";
import { Tune, Star } from "@material-ui/icons/";
import { DialogContainer, FilterContainer, StyledRating } from "./styles";

const MainMap = () => {
  const { activities } = useSelector((state) => state.activity);
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

  const Place = {
    lat: 35.6684415,
    lng: 139.6007848,
    name: "Tokyo",
  };

  return (
    <>
      <DialogContainer>
        <Typography variant="h3">Explore Activities in {Place.name}</Typography>
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
        lat={Place.lat}
        lng={Place.lng}
        filter={filter}
        activities={activities}
      />
    </>
  );
};

export default MainMap;
