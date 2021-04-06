import React from "react";
// Components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import Button from "components/CustomButtons/Button";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

import { Subject, Delete } from "@material-ui/icons";

import styles from "assets/jss/material-dashboard-pro-react/views/sectionCards";
const useStyles = makeStyles(styles);

const RotatinCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6} lg={4}>
          <div className={classes.rotatingCardContainer}>
            <Card background className={classes.cardRotate}>
              <div
                className={classes.front + " " + classes.wrapperBackground}
                style={{
                  backgroundImage: `url()`,
                }}
              >
                <CardBody background className={classes.cardBodyRotate}>
                  <h6 className={classes.cardCategoryWhite}>
                    Full Background Card
                  </h6>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <h3 className={classes.cardTitleWhite}>
                      This Background Card Will Rotate on Hover
                    </h3>
                  </a>
                  <p className={classes.cardDescriptionWhite}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                </CardBody>
              </div>
              <div
                className={classes.back + " " + classes.wrapperBackground}
                style={{
                  backgroundImage: `url()`,
                }}
              >
                <CardBody background className={classes.cardBodyRotate}>
                  <div className={classes.textCenter}>
                    <Button round justIcon color="info">
                      <Subject />
                    </Button>
                    <Button round justIcon color="success">
                      <Icon>mode_edit</Icon>
                    </Button>
                    <Button round justIcon color="danger">
                      <Delete />
                    </Button>
                  </div>
                </CardBody>
              </div>
            </Card>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default RotatinCard;
