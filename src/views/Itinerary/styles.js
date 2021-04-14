import React from "react";
import styled from "styled-components";
import { Tabs, Tab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const StyledTabs = withStyles({
  flexContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#e91e63",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "black",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    // marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
    backgroundColor: "transparent",
  },
}))((props) => <Tab disableRipple {...props} />);

export const StyledTabSection = styled.div`
  background-color: transparent;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
