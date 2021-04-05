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
  TimelineDot,
} from "@material-ui/lab/";
import { Paper, Typography, ButtonBase } from "@material-ui/core";
import { StyledTimeline } from "./styles";

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
            {activities[i].dayActivity.startTime.slice(0, 5)}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <StyledTimeline color="secondary">
            <Typography>{String.fromCharCode(i + 65)}</Typography>
          </StyledTimeline>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <ButtonBase>
            <Link to={`/activities/${activities[i].slug}`}>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  {activities[i].name}
                </Typography>
              </Paper>
            </Link>
          </ButtonBase>
        </TimelineContent>
      </TimelineItem>
    );
  return <Timeline align="alternate">{timeline}</Timeline>;
};

export default DayTimeline;
