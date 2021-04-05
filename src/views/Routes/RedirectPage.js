import React from "react";
import { useHistory } from "react-router-dom";
// Components
import Button from "components/CustomButtons/Button";
// Styling
import { Box } from "@material-ui/core";

const RedirectPage = () => {
  const history = useHistory();

  return (
    <Box ml={40} mt={30} mr={40}>
      <Box ml={13}>
        <h3>Start planning your trip !</h3>
      </Box>
      <Button
        color="warning"
        simple
        style={{ width: "100%" }}
        onClick={() => history.push("/itinerary")}
      >
        Let's Go
      </Button>
    </Box>
  );
};

export default RedirectPage;
