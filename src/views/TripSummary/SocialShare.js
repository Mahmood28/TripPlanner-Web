import React from "react";
// Stylilng
import { Grid, Box } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const SocialShare = ({ slug, destination }) => {
  const url = `http://localhost:3000/trips/${slug}`;
  const msg = `Hello! check the trip plan for ${destination.city}, ${destination.country}`;

  return (
    <Box mt={1}>
      <Grid
        container
        spacing={1}
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
      >
        <Grid item>
          <Box mt={0.5}>
            <ShareIcon />
          </Box>
        </Grid>
        <Grid item>
          <EmailShareButton
            url={url}
            subject={`My Trip - ${destination.city}, ${destination.country}`}
            body={msg}
          >
            <EmailIcon size={35} round />
          </EmailShareButton>
        </Grid>
        <Grid item>
          <WhatsappShareButton url={url} title={msg} separator=":: ">
            <WhatsappIcon size={35} round />
          </WhatsappShareButton>{" "}
        </Grid>
        <Grid item>
          <FacebookShareButton url={url} quote={msg} hashtag="#mytrip">
            <FacebookIcon size={35} round={true} />
          </FacebookShareButton>{" "}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialShare;
