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
// Syling
import { makeStyles } from "@material-ui/core/styles";
import { Box, List, ListItem } from "@material-ui/core";

import styles from "assets/jss/material-dashboard-pro-react/components/footerStyle.js";
const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const history = useHistory();
  const { user } = useSelector((state) => state.authReducer);

  const { fluid, white } = props;
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
      <div className={classes.right}>
        <List className={classes.list}>
          {activePage === "/explore" && (
            <ListItem className={classes.inlineBlock}>
              <ActivityForm />
            </ListItem>
          )}
          {!isSummary && (
            <ListItem className={classes.inlineBlock}>
              <Box ml={2}>
                <Button color="warning" onClick={handleNext}>
                  Next
                </Button>
              </Box>
            </ListItem>
          )}
          {isSummary && (
            <ListItem className={classes.inlineBlock}>
              <Box ml={2}>
                {user && <SaveAlert />}
                {!user && <AuthAlert />}
              </Box>
            </ListItem>
          )}
        </List>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
};
