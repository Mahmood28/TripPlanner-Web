import React from "react";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  ButtonBase,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: "74ch",
    height: "15ch",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  cover: {
    width: 200,
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
  selectedCard: {
    display: "flex",
    width: "74ch",
    height: "15ch",
    boxShadow: "0 1px 6px 1px #ff9800",
  },
}));

const ActivityCard = ({ day, activity, event, setEvent }) => {
  const classes = useStyles();
  const selected = event === activity;

  return (
    <Box mb={2}>
      <ButtonBase
        className={classes.cardAction}
        onClick={() => setEvent(activity)}
      >
        <Box>
          <Card className={selected ? classes.selectedCard : classes.root}>
            <CardMedia
              className={classes.cover}
              image={activity.pictures[0]}
              title="activity name"
            />

            <div>
              <CardContent>
                <h4>{activity.name}</h4>
              </CardContent>
            </div>
          </Card>
        </Box>
      </ButtonBase>
    </Box>
  );
};

export default ActivityCard;
