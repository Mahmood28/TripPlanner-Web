import React from "react";

//Components

// Stylilng
import Grid from "@material-ui/core/Grid";
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
    <Grid
      container
      spacing={1}
      container
      direction="row"
      justify="flex-end"
      alignItems="flex-start"
    >
      <Grid item>
        <ShareIcon />
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
  );
};

export default SocialShare;
