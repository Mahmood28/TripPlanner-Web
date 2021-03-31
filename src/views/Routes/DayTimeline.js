import React from "react";
//Styling
import { makeStyles } from "@material-ui/core/styles";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@material-ui/lab/";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "6px 16px",
  },
}));

const DayTimeline = ({ activities }) => {
  const classes = useStyles();
  const timeline = [];
  for (let i = 0; i < activities.length; i++)
    timeline.push(
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            {activities[i].DayActivity.startTime.slice(0, 5)}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            color="secondary"
            style={{ paddingRight: "10px", paddingLeft: "10px" }}
          >
            <Typography>{String.fromCharCode(i + 65)}</Typography>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              {activities[i].name}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    );
  return <Timeline align="alternate">{timeline}</Timeline>;
};

export default DayTimeline;
