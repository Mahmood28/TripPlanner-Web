import React, { useState, useEffect, createRef } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
// Scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// Components
import TripSummary from "views/TripSummary";
// Styling
import cx from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./styles";

let ps;

const useStyles = makeStyles(styles);

const Scrollbar = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  const { itinerary } = useSelector((state) => state.tripReducer);
  const activeTrip = JSON.parse(localStorage.getItem("activeTrip"));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [miniActive, setMiniActive] = useState(false);

  const mainPanelClasses =
    classes.mainPanel +
    " " +
    cx({
      [classes.mainPanelSidebarMini]: miniActive,
      [classes.mainPanelWithPerfectScrollbar]:
        navigator.platform.indexOf("Win") > -1,
    });

  // ref for main panel div
  const mainPanel = createRef();
  // effect instead of componentDidMount, componentDidUpdate and componentWillUnmount
  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  });

  const getActiveRoute = (routes) => {
    let activeRoute = "";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/") {
        return prop.path === "summary" ? (
          <Route path={prop.layout + prop.path}>
            <TripSummary
              activeTrip={activeTrip}
              itinerary={itinerary}
              key={key}
            />
          </Route>
        ) : (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={mainPanelClasses} ref={mainPanel}>
        <div className={classes.content}>
          <div className={classes.container}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Scrollbar;
