import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import Search from "./Search";

import styles from "assets/jss/material-dashboard-pro-react/layouts/authStyle.js";
import background from "assets/img/lock.jpeg";

const useStyles = makeStyles(styles);

export default function Home(props) {
  const { ...rest } = props;
  // ref for the wrapper div
  const wrapper = React.createRef();
  // styles
  const classes = useStyles();
  React.useEffect(() => {
    document.body.style.overflow = "unset";
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });

  return (
    <div>
      <AuthNavbar {...rest} />
      <div className={classes.wrapper} ref={wrapper}>
        <div
          className={classes.fullPage}
          style={{ backgroundImage: "url(" + background + ")" }}
        >
          <Search />
        </div>
      </div>
    </div>
  );
}
