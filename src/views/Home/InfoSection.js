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

import styles from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle";
import background from "assets/img/login.jpeg";
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
        // style={{ backgroundImage: "url(" + background + ")" }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <h2 className={classes.title}>Pick the best plan for you</h2>
              <h5 className={classes.description}>
                You have Free Unlimited Updates and Premium Support on each
                package.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={3}>
              <Card pricing raised>
                <CardBody pricing>
                  <h6 className={classes.cardCategory}>Freelancer</h6>
                  <div className={classes.icon}>
                    <Icon className={classes.iconRose}>weekend</Icon>
                  </div>
                  <h3 className={`${classes.cardTitle} ${classes.marginTop30}`}>
                    FREE
                  </h3>
                  <p className={classes.cardDescription}>
                    This is good if your company size is between 2 and 10
                    Persons.
                  </p>
                  <Button round color="rose">
                    Choose plan
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card pricing raised>
                <CardBody pricing>
                  <h6 className={classes.cardCategory}>SMALL COMPANY</h6>
                  <div className={classes.icon}>
                    <Home className={classes.iconRose} />
                  </div>
                  <h3 className={`${classes.cardTitle} ${classes.marginTop30}`}>
                    $29
                  </h3>
                  <p className={classes.cardDescription}>
                    This is good if your company size is between 2 and 10
                    Persons.
                  </p>
                  <Button round color="rose">
                    Choose plan
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card pricing raised>
                <CardBody pricing>
                  <h6 className={classes.cardCategory}>MEDIUM COMPANY</h6>
                  <div className={classes.icon}>
                    <Business className={classes.iconRose} />
                  </div>
                  <h3 className={`${classes.cardTitle} ${classes.marginTop30}`}>
                    $69
                  </h3>
                  <p className={classes.cardDescription}>
                    This is good if your company size is between 11 and 99
                    Persons.
                  </p>
                  <Button round color="rose">
                    Choose plan
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card pricing raised>
                <CardBody pricing>
                  <h6 className={classes.cardCategory}>ENTERPRISE</h6>
                  <div className={classes.icon}>
                    <AccountBalance className={classes.iconRose} />
                  </div>
                  <h3 className={`${classes.cardTitle} ${classes.marginTop30}`}>
                    $159
                  </h3>
                  <p className={classes.cardDescription}>
                    This is good if your company size is 99+ persons.
                  </p>
                  <Button round color="rose">
                    Choose plan
                  </Button>
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
