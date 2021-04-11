import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { handleFavourite } from "store/actions/authActions";
// Components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CardFooter from "components/Card/CardFooter";
import Button from "components/CustomButtons/Button";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { useToasts } from "react-toast-notifications";
import { StyledRating } from "views/ActivityDetail/ReviewForm";
import { Box, CardMedia } from "@material-ui/core";
import { Star, Favorite } from "@material-ui/icons";

import productStyle from "assets/jss/material-dashboard-pro-react/views/productStyle";
const useStyles = makeStyles(productStyle);

const ActivityCard = ({ activity }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const { favourites } = useSelector((state) => state.authReducer);

  const favourite = favourites.some(
    (_activity) => _activity.id === activity.id
  );

  const handleFavourites = async () => {
    await dispatch(handleFavourite(activity, favourite));
    addToast(
      `${activity.name} ${
        !favourite ? "added to" : "removed from"
      } your favourites.`,
      {
        appearance: `${!favourite ? "success" : "warning"}`,
        autoDismiss: true,
      }
    );
  };

  let rating = 0;
  if (!activity.rating) {
    const ratings = activity.reviews.map((review) => review.rating);
    const sum = ratings.reduce((a, b) => a + b, 0);
    rating = sum / ratings.length || 0;
  } else {
    rating = Math.round(parseFloat(activity.rating) * 2) / 2;
  }

  return (
    <Box mt={8} mr={0}>
      <div className={classes.container}>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <GridContainer>
            <GridItem md={6} sm={6}>
              <CardMedia
                className={classes.media}
                image={activity.image}
                title={activity.name}
              />
            </GridItem>
            <GridItem md={6} sm={6}>
              <Box mr={2}>
                <h3 className={classes.title}>{activity.name}</h3>
              </Box>
              <Box display="flex" mt={2}>
                <Box mt={1.2} mr={1}>
                  {rating !== 0 && (
                    <StyledRating
                      value={rating}
                      precision={0.5}
                      icon={<Star fontSize="30px" />}
                      readOnly
                    />
                  )}
                </Box>
                <h4>{rating === 0 ? "No rating" : rating}</h4>
              </Box>
              <Box mt={4} mr={4}>
                <h5>{activity.shortDescription}</h5>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
                m={2}
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                }}
              >
                {favourite ? (
                  <Button
                    justIcon
                    round
                    color="rose"
                    onClick={handleFavourites}
                  >
                    <Favorite style={{ color: "white" }} />
                  </Button>
                ) : (
                  <Button
                    justIcon
                    round
                    color="grey"
                    onClick={handleFavourites}
                  >
                    <Favorite />
                  </Button>
                )}
                <Box ml={2}>
                  <Button
                    round
                    color="rose"
                    href={activity.bookingLink}
                    target="_blank"
                  >
                    Book Now
                  </Button>
                </Box>
              </Box>
              <CardFooter></CardFooter>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </Box>
  );
};

export default ActivityCard;
