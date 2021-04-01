import React from "react";
import moment from "moment";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";
import { MAP_API_KEY } from "keys";
// Components
import Loading from "../../components/Loading";

// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";

// Styling
import styles from "../../assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";
import {
  StyledMapContainer,
  StyledMapElement,
  styledMap,
} from "../Routes/styles";
import Map from "./Map";
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

export default function DayItem({ day, destination }) {
  const classes = useStyles();
  const sortedActivities = day.activities.sort(
    (a, b) =>
      moment.duration(a.DayActivity.startTime) -
      moment.duration(b.DayActivity.startTime)
  );

  const activitiesList =
    day.activities.length > 0
      ? sortedActivities.map((_activity, idx) => {
          let activity = _activity.DayActivity;
          return [
            `${idx + 1}`,
            activity.name,
            `${moment(activity.startTime, "HH:mm").format("H:mm")}`,
            "-",
            `${moment(activity.endTime, "HH:mm").format("H:mm")}`,
          ];
        })
      : null;

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <h5>Day {day.day}</h5>
            </CardIcon>
            <h4 className={classes.cardIconTitle}>
              {moment(day.date).format("dddd, MMMM D YYYY")}
            </h4>
          </CardHeader>
          <CardBody>
            <GridContainer justify="space-between">
              <GridItem xs={12} sm={12} md={5}>
                {activitiesList ? (
                  <Table tableData={activitiesList} />
                ) : (
                  <p>No Activities Yet</p>
                )}
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                {day.activities.length > 0 ? (
                  <Map
                    isMarkerShown
                    lat={destination.latitude}
                    lng={destination.longitude}
                    activities={sortedActivities}
                    // shown={1}
                  />
                ) : (
                  <p>add activities</p>
                )}
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
