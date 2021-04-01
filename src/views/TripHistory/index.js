import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHistory } from "../../store/actions/authActions";
// Components
import GridContainer from "components/Grid/GridContainer";
import TripItem from "./TripItem";
// Styling
import { Box } from "@material-ui/core";

const TripHistory = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const history = useSelector((state) => state.authReducer.history);

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;
  const trips = history.map((trip) => <TripItem trip={trip} key={trip.id} />);

  return (
    <Box mt={4}>
      <GridContainer>{trips}</GridContainer>
    </Box>
  );
};

export default TripHistory;
