import React from "react";
// Components
import Media from "components/Media/Media";
// Styling
import { StyledRating } from "views/ActivityDetail/ReviewForm";
import { Box } from "@material-ui/core";
import { Star } from "@material-ui/icons";

import avatar from "assets/img/faces/avatar3.png";

const Review = ({ review }) => {
  if (!review) return <p></p>;
  return (
    <>
      <Media
        avatar={avatar}
        title={
          <span>
            {review.user.firstName + " " + review.user.lastName}
            <small> · {review.date.split("-").reverse().join("-")}</small>
          </span>
        }
        body={
          <>
            <StyledRating
              value={review.rating}
              precision={0.5}
              icon={<Star fontSize="30px" />}
              readOnly
            />
            <Box mt={2}>
              <p>{review.description}</p>
            </Box>
          </>
        }
      />
      <hr
        style={{
          color: "#bdbdbd",
          backgroundColor: "#bdbdbd",
          height: 1,
        }}
      />
    </>
  );
};

export default Review;
