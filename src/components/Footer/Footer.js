/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// Components
import Button from "components/CustomButtons/Button";
import ActivityForm from "./ActivityForm";
import SaveAlert from "./SaveAlert";
import AuthAlert from "./AuthAlert";
import SocialShare from "views/TripSummary/SocialShare";
// Syling
import { makeStyles } from "@material-ui/core/styles";
import { Box, List, ListItem } from "@material-ui/core";

import styles from "assets/jss/material-dashboard-pro-react/components/footerStyle.js";
const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const history = useHistory();
  const { user } = useSelector((state) => state.authReducer);

  const { fluid, white, slug, destination } = props;
  const activePage = useLocation().pathname;

  const handleNext = () => {
    if (activePage === "/explore") {
      history.push("/itinerary");
    } else if (activePage === "/itinerary") {
      history.push("/summary");
    }
  };

  const isSummary = activePage === "/summary";

  return (
    <footer className={classes.footer}>
      <List className={classes.list}>
        {activePage === "/explore" && (
          <div className={classes.right}>
            <ListItem className={classes.inlineBlock}>
              <ActivityForm />
            </ListItem>
          </div>
        )}
        {!isSummary && (
          <div className={classes.right}>
            <ListItem className={classes.inlineBlock}>
              <Box ml={2}>
                <Button color="warning" onClick={handleNext}>
                  Next
                </Button>
              </Box>
            </ListItem>
          </div>
        )}
        {isSummary && (
          <>
            <div className={classes.left}>
              {/* <h6 className={classes.inlineBlock}>Share your trip</h6> */}
              <ListItem className={classes.inlineBlock}>
                <SocialShare slug={slug} destination={destination} />
              </ListItem>
            </div>
            <div className={classes.right}>
              <ListItem className={classes.inlineBlock}>
                <Box ml={2}>
                  {user && <SaveAlert />}
                  {!user && <AuthAlert />}
                </Box>
              </ListItem>
            </div>
          </>
        )}
      </List>
    </footer>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
};
