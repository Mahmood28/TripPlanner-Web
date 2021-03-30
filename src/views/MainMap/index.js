import React, { useState } from "react";
import { useSelector } from "react-redux";
// Components
import Loading from "components/Loading";
import Map from "./Map";
//Styling
import { TextField, Slider, Typography, Button } from "@material-ui/core";
import { Tune } from "@material-ui/icons/";
import { DialogContainer, FilterContainer } from "./styles";

const MainMap = () => {
  const location = JSON.parse(localStorage.getItem("activeTrip")).destination;
  const { activities } = useSelector((state) => state.activity);
  const maxPrice = Math.max(
    ...activities.map((activity) => +activity.price.amount)
  );
  const initialFilter = {
    price: [0, Infinity],
    rating: 1,
    query: "",
  };
  const [shown, setShown] = useState(false);
  const [filter, setFilter] = useState(initialFilter);

  if (activities.length === 0) return <Loading />;
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
              onChange={(event, priceRange) =>
                setFilter({ ...filter, price: priceRange })
              }
              step={10}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              max={Math.round(maxPrice + 10)}
              style={{ width: "200px", marginLeft: "20px" }}
            />
          </div>
          <div>
            <Typography style={{ textAlign: "center" }} gutterBottom>
              Rating
            </Typography>
            <Slider
              value={filter.rating}
              onChange={(event, newValue) =>
                setFilter({ ...filter, rating: newValue })
              }
              defaultValue={1}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={0.5}
              marks
              min={1}
              max={5}
              style={{
                width: "200px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
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
