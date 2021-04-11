import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signout } from "store/actions/authActions";

// import { Manager, Target, Popper } from "react-popper";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Popper from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
import { Tooltip, Box } from "@material-ui/core";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { Favorite } from "@material-ui/icons";

// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import TripForm from "./TripForm";

import styles from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import ButtonStyling from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle";

const ButtonStyles = makeStyles(ButtonStyling);
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const _classes = ButtonStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.authReducer);

  const [openNotification, setOpenNotification] = React.useState(null);
  const handleClickNotification = (event) => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const [openProfile, setOpenProfile] = React.useState(null);
  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };
  const handleProfile = () => {
    setOpenProfile(null);
    history.push("/profile");
  };
  const handleSignout = () => {
    setOpenProfile(null);
    dispatch(signout());
    history.replace("/");
  };
  const { rtlActive } = props;
  const searchButton =
    classes.top +
    " " +
    classes.searchButton +
    " " +
    classNames({
      [classes.searchRTL]: rtlActive,
    });
  const dropdownItem = classNames(classes.dropdownItem, classes.primaryHover, {
    [classes.dropdownItemRTL]: rtlActive,
  });
  const wrapper = classNames({
    [classes.wrapperRTL]: rtlActive,
  });
  const managerClasses = classNames({
    [classes.managerClasses]: true,
  });
  return (
    <div className={wrapper}>
      {/* <CustomInput
        rtlActive={rtlActive}
        formControlProps={{
          className: classes.top + " " + classes.search
        }}
        inputProps={{
          placeholder: rtlActive ? "بحث" : "Search",
          inputProps: {
            "aria-label": rtlActive ? "بحث" : "Search",
            className: classes.searchInput
          }
        }}
      /> */}
      {/* <Button
        color="white"
        aria-label="edit"
        justIcon
        round
        className={searchButton}
      >
        <Search className={classes.headerLinksSvg + " " + classes.searchIcon} />
      </Button> */}
      <Box display="flex">
        <TripForm />
        {user && (
          <div className={managerClasses}>
            <Tooltip
              title="Favourites"
              placement="bottom"
              classes={{ tooltip: _classes.tooltip }}
            >
              <Button
                color="transparent"
                aria-label="Person"
                justIcon
                aria-owns={openProfile ? "profile-menu-list" : null}
                aria-haspopup="true"
                onClick={() => history.push("/favourites")}
                className={
                  rtlActive ? classes.buttonLinkRTL : classes.buttonLink
                }
                muiClasses={{
                  label: rtlActive ? classes.labelRTL : "",
                }}
              >
                <Favorite
                  className={
                    classes.headerLinksSvg +
                    " " +
                    (rtlActive
                      ? classes.links + " " + classes.linksRTL
                      : classes.links)
                  }
                />
              </Button>
            </Tooltip>
            <Button
              color="transparent"
              aria-label="Person"
              justIcon
              aria-owns={openProfile ? "profile-menu-list" : null}
              aria-haspopup="true"
              onClick={handleClickProfile}
              className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
              muiClasses={{
                label: rtlActive ? classes.labelRTL : "",
              }}
            >
              <Person
                className={
                  classes.userIcon +
                  " " +
                  (rtlActive
                    ? classes.links + " " + classes.linksRTL
                    : classes.links)
                }
              />
            </Button>
            <Popper
              open={Boolean(openProfile)}
              anchorEl={openProfile}
              transition
              disablePortal
              placement="bottom"
              className={classNames({
                [classes.popperClose]: !openProfile,
                [classes.popperResponsive]: true,
                [classes.popperNav]: true,
              })}
            >
              {({ TransitionProps }) => (
                <Grow
                  {...TransitionProps}
                  id="profile-menu-list"
                  style={{ transformOrigin: "0 0 0" }}
                >
                  <Paper className={classes.dropdown}>
                    <ClickAwayListener onClickAway={handleCloseProfile}>
                      <MenuList role="menu">
                        <MenuItem
                          onClick={handleProfile}
                          className={dropdownItem}
                        >
                          {"Profile"}
                        </MenuItem>
                        <Divider light />
                        <MenuItem
                          onClick={handleSignout}
                          className={dropdownItem}
                        >
                          {"Sign out"}
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        )}
      </Box>
    </div>
  );
}

HeaderLinks.propTypes = {
  rtlActive: PropTypes.bool,
};
