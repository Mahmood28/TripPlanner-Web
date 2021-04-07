import React from "react";
import { Link } from "react-router-dom";
//Styling
import { makeStyles } from "@material-ui/core/styles";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@material-ui/lab/";
import { Paper, Typography, ButtonBase } from "@material-ui/core";
import { StyledCarIcon, StyledDurationText, StyledTimeline } from "./styles";
import moment from "moment";
import BeatLoader from "react-spinners/BeatLoader";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "6px 16px",
  },
}));

const DayTimeline = ({ activities, directions, day }) => {
  const classes = useStyles();
  const timeline = activities.map((activity, idx) => (
    <TimelineItem key={idx}>
      <TimelineOppositeContent>
        <Typography variant="body2" color="textSecondary">
          {moment(activity.dayActivity.startTime, "hh:mm:ss").format("h:mm A")}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {moment(activity.dayActivity.endTime, "hh:mm:ss").format("h:mm A")}
        </Typography>
        <StyledDurationText variant="body2">
          {directions[day.id] && idx !== activities.length - 1 && (
            <>
              <StyledCarIcon />
              {directions[day.id].routes[0].legs[idx] ? (
                directions[day.id].routes[0].legs[idx].duration.text
              ) : (
                <>
                  Calculating
                  <BeatLoader size="5" color="black" />
                </>
              )}
            </>
          )}
        </StyledDurationText>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <StyledTimeline color="secondary">
          <Typography>{String.fromCharCode(idx + 65)}</Typography>
        </StyledTimeline>
        {idx !== activities.length - 1 && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <ButtonBase>
          <Link to={`/activities/${activity.slug}`}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {activity.name}
              </Typography>
            </Paper>
          </Link>
        </ButtonBase>
      </TimelineContent>
    </TimelineItem>
  ));
  return <Timeline align="alternate">{timeline}</Timeline>;
};

export default DayTimeline;
