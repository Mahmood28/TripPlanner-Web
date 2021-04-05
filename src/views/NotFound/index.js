import React from "react";
import { useHistory } from "react-router";
// Components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { BackButton } from "./styles";

import styles from "../../assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";
const useStyles = makeStyles(styles);

const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <div className={classes.contentCenter}>
        <GridContainer>
          <GridItem md={12}>
            <h1 className={classes.title}>404</h1>
            <h2 className={classes.subTitle}>Page not found :(</h2>
            <h4 className={classes.description}>
              Ooooups! Looks like you got lost.
            </h4>
            <BackButton variant="outlined" onClick={() => history.goBack()}>
              Back
            </BackButton>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
};

export default NotFound;
