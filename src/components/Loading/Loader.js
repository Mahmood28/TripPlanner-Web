import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
// Styling
import { Box } from "@material-ui/core";

const Loader = () => {
  return (
    <Box ml={"50%"} mt={"25%"}>
      <BeatLoader color="black" size={12} />
    </Box>
  );
};

export default Loader;
