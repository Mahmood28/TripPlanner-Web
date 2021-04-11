import React, { useEffect, createRef } from "react";
// Components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { Home, Business, AccountBalance } from "@material-ui/icons";
import RoomIcon from "@material-ui/icons/Room";
import EventNoteIcon from "@material-ui/icons/EventNote";
import MapIcon from "@material-ui/icons/Map";
import GroupIcon from "@material-ui/icons/Group";

import styles from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle";
import background from "assets/img/bg-pricing.jpeg";
// import background from "assets/img/01.jpeg";

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
        style={{ backgroundImage: "url(" + background + ")" }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <h3 className={classes.title}>
                Plan your trips through an interactive map.
              </h3>
              {/* <h5 className={classes.description}>
                plan your trips through an interactive map.
              </h5> */}
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={3}>
              <Card pricing raised>
                <CardBody pricing>
                  <h6 className={classes.cardCategory}>1. Explore</h6>
                  <div className={classes.icon}>
                    <RoomIcon className={classes.iconRose} />
                  </div>
                  <h3
                    className={`${classes.cardTitle} ${classes.marginTop30}`}
                  ></h3>
                  <p className={classes.cardDescription}>
                    Explore activities and events based on your destination.
                  </p>
                  {/* <Button round color="rose">
                    Preview
                  </Button> */}
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card pricing raised>
                <CardBody pricing>
                  <h6 className={classes.cardCategory}>2. Plan</h6>
                  <div className={classes.icon}>
                    <EventNoteIcon className={classes.iconRose} />
                  </div>
                  <h3
                    className={`${classes.cardTitle} ${classes.marginTop30}`}
                  ></h3>
                  <p className={classes.cardDescription}>
                    Create an itinerary for your trip with activities that
                    excite you.
                  </p>
                  {/* <Button round color="rose">
                    Preview
                  </Button> */}
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card pricing raised>
                <CardBody pricing>
                  <h6 className={classes.cardCategory}>3. Track</h6>
                  <div className={classes.icon}>
                    <MapIcon className={classes.iconRose} />
                  </div>
                  <h3
                    className={`${classes.cardTitle} ${classes.marginTop30}`}
                  ></h3>
                  <p className={classes.cardDescription}>
                    View your trip plan as map routes to easily track your
                    activities.
                  </p>
                  {/* <Button round color="rose">
                    Preview
                  </Button> */}
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card pricing raised>
                <CardBody pricing>
                  <h6 className={classes.cardCategory}>4. Connect</h6>
                  <div className={classes.icon}>
                    <GroupIcon className={classes.iconRose} />
                  </div>
                  <h3
                    className={`${classes.cardTitle} ${classes.marginTop30}`}
                  ></h3>
                  <p className={classes.cardDescription}>
                    Connect with other travellers to enhance your trip
                    experience.
                  </p>
                  {/* <Button round color="rose">
                    Preview
                  </Button> */}
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          <br />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
