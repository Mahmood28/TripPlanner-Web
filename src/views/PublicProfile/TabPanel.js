import React from "react";
import { Paper, Tabs, Tab, Typography, Box } from "@material-ui/core/";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography align="center">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
