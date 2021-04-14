import React, { useEffect, createRef } from "react";
// Scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// Styling
import cx from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./styles";
const useStyles = makeStyles(styles);

let ps;

const Scrollbar = (props) => {
  const classes = useStyles();

  const mainPanelClasses =
    classes.mainPanel +
    " " +
    cx({
      [classes.mainPanelSidebarMini]: false,
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

  const resizeFunction = () => {
    // if (window.innerWidth >= 960) {
    //   setMobileOpen(false);
    // }
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
