import React, { useEffect } from "react";
import { Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchHistory } from "../../store/actions/authActions";
// Components
import GridContainer from "components/Grid/GridContainer";
import Loader from "components/Loading/Loader";
import TripItem from "./TripItem";
// Styling
import { Box } from "@material-ui/core";

const TripHistory = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.authReducer.loading);
  const { history } = useSelector((state) => state.authReducer);
  const { user } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  if (!user) return <Redirect to="/404" />;
  if (loading) return <Loader />;

  const trips = history.map((trip) => <TripItem trip={trip} key={trip.id} />);

  return (
    <Box mt={4}>
      <GridContainer>{trips}</GridContainer>
    </Box>
  );
};

export default TripHistory;
