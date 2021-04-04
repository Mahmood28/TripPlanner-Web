import React from "react";
import classNames from "classnames";
// Components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { StyledRating } from "views/ActivityDetail/ReviewForm";
import { Box, CardMedia } from "@material-ui/core";
import { Star } from "@material-ui/icons";

import productStyle from "assets/jss/material-dashboard-pro-react/views/productStyle";
const useStyles = makeStyles(productStyle);

const ActivityCard = ({ activity }) => {
  const classes = useStyles();
  console.log("active activitiy", activity);
  const rating = Math.round(parseFloat(activity.rating) * 2) / 2;

  return (
    <Box mt={8} mr={0}>
      <div className={classes.container}>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <GridContainer>
            <GridItem md={6} sm={6}>
              <CardMedia
                className={classes.media}
                image={activity.pictures[0]}
                title={activity.name}
              />
            </GridItem>
            <GridItem md={6} sm={6}>
              <Box mr={2}>
                <h3 className={classes.title}>{activity.name}</h3>
              </Box>
              <Box display="flex" mt={2}>
                <Box mt={1.2} mr={1}>
                  <StyledRating
                    value={rating}
                    precision={0.5}
                    icon={<Star fontSize="30px" />}
                    readOnly
                  />
                </Box>
                <h4>{rating}</h4>
              </Box>
              <Box mt={4} mr={4}>
                <h5>{activity.shortDescription}</h5>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
                m={4}
              >
                <Button
                  round
                  color="rose"
                  href={activity.bookingLink}
                  target="_blank"
                >
                  Book Now
                </Button>
              </Box>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </Box>
  );
};

export default ActivityCard;
