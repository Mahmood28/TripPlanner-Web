import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteReview } from "store/actions/authActions";
// Components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import EditReview from "views/Profile/EditReview";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { StyledRating } from "views/ActivityDetail/ReviewForm";
import { Box, ButtonBase, CardMedia } from "@material-ui/core";
import { Close, Place, Star, DateRange } from "@material-ui/icons";

import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
const useStyles = makeStyles(styles);

const ReviewCard = ({ review, profile }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const rating = Math.round(parseFloat(review.rating) * 2) / 2;

  return (
    <GridItem xs={12} sm={12} md={10}>
      <Card>
        <GridContainer>
          <GridItem xs={12} sm={4}>
            <Box m={1.5}>
              <ButtonBase>
                <Link to={`/activities/${review.activity.slug}`}>
                  <CardMedia
                    style={{
                      height: 180,
                      width: 300,
                      borderRadius: "6px",
                    }}
                    image={review.activity.image}
                    title={review.activity.image}
                  />
                </Link>
              </ButtonBase>
            </Box>
          </GridItem>
          <GridItem xs={12} sm={8}>
            <Box>
              <CardBody>
                <h5>{review.activity.name}</h5>
                <StyledRating
                  value={rating}
                  precision={0.5}
                  icon={<Star fontSize="30px" />}
                  readOnly
                />
                <Box mt={1}>
                  <p>{review.description}</p>
                </Box>
              </CardBody>
              <CardFooter product>
                <div className={`${classes.stats} ${classes.productStats}`}>
                  <Place /> {review.activity.destination.city},{" "}
                  {review.activity.destination.country}
                  <Box ml={4}>
                    <DateRange /> {review.date.split("-").reverse().join("-")}
                  </Box>
                </div>
                {!profile && (
                  <div className={classes.price}>
                    <Box display="flex">
                      <EditReview review={review} />
                      <Button
                        color="rose"
                        simple
                        className={classes.actionButton}
                        onClick={() => dispatch(deleteReview(review))}
                      >
                        <Close className={classes.icon} />
                      </Button>
                    </Box>
                  </div>
                )}
              </CardFooter>
            </Box>
          </GridItem>
        </GridContainer>
      </Card>
    </GridItem>
  );
};

export default ReviewCard;
