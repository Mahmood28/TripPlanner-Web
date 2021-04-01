import React, { useEffect } from "react";
// @material-ui/core Components
import { makeStyles } from "@material-ui/core/styles";
// Components
import AuthNavbar from "components/Navbars/AuthNavbar";

import styles from "assets/jss/material-dashboard-pro-react/layouts/authStyle";
import background from "assets/img/login.jpeg";

const useStyles = makeStyles(styles);

const AuthLayout = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  // ref for the wrapper div
  const wrapper = React.createRef();
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
          {/* add component prop here */}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
