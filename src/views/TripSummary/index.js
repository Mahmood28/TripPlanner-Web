import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import { Box } from "@material-ui/core";
// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Language from "@material-ui/icons/Language";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Table from "../../components/Table/Table.js";
import Button from "../../components/CustomButtons/Button.js";
import Danger from "../../components/Typography/Danger.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import styles from "../../assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

import priceImage1 from "../../assets/img/card-2.jpeg";
import priceImage2 from "../../assets/img/card-3.jpeg";
import priceImage3 from "../../assets/img/card-1.jpeg";
import DayItem from "./DayItem.js";

const us_flag = require("../../assets/img/flags/US.png");
const de_flag = require("../../assets/img/flags/DE.png");
const au_flag = require("../../assets/img/flags/AU.png");
const gb_flag = require("../../assets/img/flags/GB.png");
const ro_flag = require("../../assets/img/flags/RO.png");
const br_flag = require("../../assets/img/flags/BR.png");

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920,
};

const useStyles = makeStyles(styles);
export default function TripSummary() {
  const classes = useStyles();
  const { itinerary } = useSelector((state) => state.tripReducer);
  const activeTrip = JSON.parse(localStorage.getItem("activeTrip"));

  if (!itinerary.days) return <p>Loading...</p>;
  const daysList = itinerary.days.map((day) => (
    <DayItem day={day} key={day.id} destination={activeTrip.destination.city} />
  ));
  return (
    <div>
      <div>
        <Box className={classes.box}>
          <h2>
            {activeTrip.destination.city}, {activeTrip.destination.country}
          </h2>
        </Box>
        <Box className={classes.box}>
          <h3>
            {moment(activeTrip.startDate).format("LL")} -{" "}
            {moment(activeTrip.endDate).format("LL")}
          </h3>
        </Box>
      </div>
      {daysList}
    </div>
  );
}
