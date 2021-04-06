import React, { useState } from "react";
import moment from "moment";
// Components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardIcon from "components/Card/CardIcon";
import CardBody from "components/Card/CardBody";
import Map from "./Map";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import DayTimeline from "./DayTimeline";

const useStyles = makeStyles(styles);

const DayItem = ({ day, destination, directions, setDirections }) => {
  const classes = useStyles();

  const sortedActivities = day.activities.sort(
    (a, b) =>
      moment.duration(a.dayActivity.startTime) -
      moment.duration(b.dayActivity.startTime)
  );

  const activitiesList =
    day.activities.length > 0
      ? sortedActivities.map((_activity, idx) => {
          let activity = _activity.dayActivity;
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
    (day.day === 1 || day.activities.length > 0) && (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
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
                    <DayTimeline
                      activities={day.activities}
                      directions={directions}
                      day={day}
                    />
                  ) : (
                    <p>No Activities Yet</p>
                  )}
                </GridItem>
                <GridItem xs={12} sm={12} md={7}>
                  {day.activities.length > 0 ? (
                    <Map
                      isMarkerShown
                      lat={destination.latitude}
                      lng={destination.longitude}
                      activities={sortedActivities}
                      directions={directions}
                      setDirections={setDirections}
                      day={day}
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
    )
  );
};

export default DayItem;
