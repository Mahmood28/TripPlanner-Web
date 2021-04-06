import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import PropTypes from "prop-types";
import { NavLink, useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import Fingerprint from "@material-ui/icons/Fingerprint";
import PersonIcon from "@material-ui/icons/Person";
// core components
import Button from "components/CustomButtons/Button";

import styles from "assets/jss/material-dashboard-pro-react/components/authNavbarStyle";
import { StyledMenueItem, StyledMenuList } from "./styles";

import { signout } from "store/actions/authActions";
import { Divider } from "@material-ui/core";
const useStyles = makeStyles(styles);

export default function AuthNavbar(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user } = useSelector((state) => state.authReducer);
  const trip = JSON.parse(localStorage.getItem("activeTrip"));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const classes = useStyles();
  const { color } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color,
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPop = Boolean(anchorEl);
  const id = openPop ? "simple-popover" : undefined;

  const list = (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {user ? (
          <div>
            <PersonIcon className={classes.listItemIcon} />
            <Button
              aria-describedby={id}
              variant="contained"
              color="transparent"
              onClick={handleClick}
              // primary={user.username}
              disableTypography={true}
              className={classes.listItemText}
            >
              {user.username}
            </Button>

            <Popover
              id={id}
              open={openPop}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <StyledMenuList autoFocusItem={openPop} id="menu-list-grow">
                <StyledMenueItem onClick={() => history.push("/profile")}>
                  Profile
                </StyledMenueItem>
                {trip && (
                  <StyledMenueItem onClick={() => history.push("/explore")}>
                    Current Trip
                  </StyledMenueItem>
                )}

                <Divider light />
                <StyledMenueItem onClick={() => dispatch(signout())}>
                  Log out
                </StyledMenueItem>
              </StyledMenuList>
            </Popover>
          </div>
        ) : (
          <NavLink to={"/signin"} className={cx(classes.navLink)}>
            <Fingerprint className={classes.listItemIcon} />
            <ListItemText
              primary={"Sign in"}
              disableTypography={true}
              className={classes.listItemText}
            />
          </NavLink>
        )}
      </ListItem>
    </List>
  );
  return (
    <AppBar position="static" className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown>
          <div className={classes.flex}>
            <Button href="/" className={classes.title} color="transparent">
              {"TRIP PLANNER"}
            </Button>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              MD Pro React
            </Button>
          </div>
        </Hidden>
        <Hidden smDown>{list}</Hidden>
        <Hidden mdUp>
          <Button
            className={classes.sidebarButton}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={"right"}
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {list}
            </Drawer>
          </Hidden>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};
