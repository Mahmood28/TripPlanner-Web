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
    width: 180,
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

const ActivityCard = ({ activity, event, setEvent }) => {
  const classes = useStyles();
  const selected = event.id === activity.id;

  return (
    <Box mb={2}>
      <ButtonBase
        className={classes.cardAction}
        onClick={() => setEvent(activity)}
      >
        <Card className={selected ? classes.selectedCard : classes.root}>
          <CardMedia
            className={classes.cover}
            image={activity.image}
            title="activity name"
          />
          <CardContent>
            <h5>{activity.name}</h5>
          </CardContent>
        </Card>
      </ButtonBase>
    </Box>
  );
};

export default ActivityCard;
