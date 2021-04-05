import React from "react";
import { useDispatch } from "react-redux";
import { deleteReview } from "store/actions/authActions";
// Components
import EditReview from "views/Profile/EditReview";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { StyledRating } from "views/ActivityDetail/ReviewForm";
import {
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemSecondaryAction,
  IconButton,
  Box,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Star } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const ReviewItem = ({ review }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const rating = Math.round(parseFloat(review.rating) * 2) / 2;

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={review.activity.name} src={review.activity.image} />
        </ListItemAvatar>
        <ListItemText
          primary={review.activity.name}
          secondary={
            <>
              <StyledRating
                value={rating}
                precision={0.5}
                icon={<Star fontSize="30px" />}
                readOnly
              />
              <Box mt={2}>
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {review.description}
                </Typography>
              </Box>
            </>
          }
        />
        <ListItemSecondaryAction>
          <Typography variant="body2" gutterBottom>
            {review.date}
          </Typography>
          <Box display="flex">
            <Box mt={1}>
              <EditReview review={review} />
            </Box>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => dispatch(deleteReview(review))}
            >
              <DeleteIcon color="secondary" />
            </IconButton>
          </Box>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ReviewItem;
