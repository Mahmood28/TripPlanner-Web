import React, { useEffect, createRef } from "react";
// Components
import AuthNavbar from "components/Navbars/AuthNavbar";
// Styling
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-dashboard-pro-react/layouts/authStyle";
import background from "assets/img/lock.jpeg";

const useStyles = makeStyles(styles);

const AuthLayout = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  // ref for the wrapper div
  const wrapper = createRef();
  useEffect(() => {
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
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
