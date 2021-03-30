import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: "70ch",
    height: "15ch",
  },
  cover: {
    width: 200,
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
}));

const ActivityCard = ({ activity, setEvent }) => {
  const classes = useStyles();

  return (
    <Box mb={2}>
      <ButtonBase
        className={classes.cardAction}
        onClick={() => setEvent(activity)}
      >
        <Card className={classes.root}>
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
      </ButtonBase>
    </Box>
  );
};

export default ActivityCard;
