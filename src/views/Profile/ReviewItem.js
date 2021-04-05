import React from "react";
import { useDispatch } from "react-redux";
import { deleteReview } from "store/actions/authActions";
// Components
import EditReview from "views/Profile/EditReview";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { StyledRating } from "views/ActivityDetail/ReviewForm";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Star } from "@material-ui/icons";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));
export default function ReviewItem({ review }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const rating = Math.round(parseFloat(review.rating) * 2) / 2;
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={review.activity.image} />
        </ListItemAvatar>
        <ListItemText
          primary={review.activity.name}
          secondary={
            <React.Fragment>
              <StyledRating
                value={rating}
                precision={0.5}
                icon={<Star fontSize="30px" />}
                readOnly
              />
              <br />
              <br />
              <Typography
                component="span"
                variant="body1"
                className={classes.inline}
                color="textPrimary"
                style={{ marginBottom: 5, marginTop: 5 }}
              >
                {review.description}
              </Typography>
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <Typography variant="body2" gutterBottom>
            {review.date}

            {/* <IconButton edge="end" aria-label="edit">
              <EditIcon color="action" />
            </IconButton> */}
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
          </Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
