import React, { useEffect, createRef } from "react";
// Components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import EventNoteIcon from "@material-ui/icons/EventNote";
import MapIcon from "@material-ui/icons/Map";
import GroupIcon from "@material-ui/icons/Group";

import styles from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle";
const useStyles = makeStyles(styles);

const InfoSection = () => {
  const classes = useStyles();

  // ref for the wrapper div
  const wrapper = createRef();
  useEffect(() => {
    document.body.style.overflow = "unset";
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });

  return (
    <div className={classes.wrapper} ref={wrapper}>
      <div
        className={classes.fullPage}
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBSFn-dIkfB_Sddipaan4IecN0AOQqo4NSszMpDB0NREIpgIhnqgdH8uD4ZC_6kh9qpoU&usqp=CAU)",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <h3 className={classes.title}>
                Plan your trips through an interactive map.
              </h3>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={3}>
              <Card pricing raised>
                <CardBody pricing>
                  <Box mt={4} mb={4}>
                    <h6 className={classes.cardCategory}>1. Explore</h6>
                    <div className={classes.icon}>
                      <RoomIcon className={classes.iconRose} />
                    </div>
                    <p className={classes.cardDescription}>
                      Explore activities and events based on your destination.
                    </p>
                  </Box>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card pricing raised>
                <CardBody pricing>
                  <Box mt={4} mb={4}>
                    <h6 className={classes.cardCategory}>2. Plan</h6>
                    <div className={classes.icon}>
                      <EventNoteIcon className={classes.iconRose} />
                    </div>
                    <p className={classes.cardDescription}>
                      Create an itinerary for your trip with activities that
                      excite you.
                    </p>
                  </Box>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card pricing raised>
                <CardBody pricing>
                  <Box mt={4} mb={4}>
                    <h6 className={classes.cardCategory}>3. Track</h6>
                    <div className={classes.icon}>
                      <MapIcon className={classes.iconRose} />
                    </div>
                    <p className={classes.cardDescription}>
                      View your trip plan as map routes to easily track your
                      activities.
                    </p>
                  </Box>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card pricing raised>
                <CardBody pricing>
                  <Box mt={4} mb={4}>
                    <h6 className={classes.cardCategory}>4. Connect</h6>
                    <div className={classes.icon}>
                      <GroupIcon className={classes.iconRose} />
                    </div>
                    <p className={classes.cardDescription}>
                      Connect with other travellers to enhance your trip
                      experience.
                    </p>
                  </Box>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
