import React from "react";
// Components
import AuthNavbar from "components/Navbars/AuthNavbar";
import Search from "./Search";
// Styling
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-dashboard-pro-react/layouts/authStyle";
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
