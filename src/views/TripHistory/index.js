import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";
import TripItem from "./TripItem";

// Actions
import { fetchHistory } from "../../store/actions/authActions";

const useStyles = makeStyles(styles);

export default function TripHistory() {
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  if (authReducer.loading) return <h1>Loading</h1>;

  const trips = authReducer.history.map((trip) => (
    <TripItem trip={trip} key={trip.id} />
  ));
  return (
    <div>
      <br />
      <br />
      <GridContainer>{trips}</GridContainer>
    </div>
  );
}
