import React from "react";
import moment from "moment";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTrip } from "store/actions/authActions";
import { listActivities } from "store/actions/activityActions";
import { fetchItinerary } from "store/actions/tripActions";
// Components
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import DeleteAlert from "./DeleteAlert";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";
import { ArtTrack, Edit, Close, Place } from "@material-ui/icons";
import { useToasts } from "react-toast-notifications";

import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import tripImage from "assets/img/card-2.jpeg";

const useStyles = makeStyles(styles);

const TripItem = ({ trip }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { addToast } = useToasts();

  const passed = new Date() > new Date(trip.startDate);

  const handleEdit = async () => {
    const activeTrip = trip;
    delete activeTrip.days;
    await localStorage.setItem("activeTrip", JSON.stringify(activeTrip));
    await localStorage.removeItem("myActivities");

    dispatch(listActivities(activeTrip.destination.id));
    dispatch(fetchItinerary(activeTrip.id));
    dispatch({
      type: "SET_TRIP",
      payload: activeTrip,
    });
    history.push("/itinerary");
  };

  const handleDelete = async () => {
    await addToast("Trip Deleted", {
      appearance: "warning",
      autoDismiss: true,
    });
    dispatch(deleteTrip(trip.id));
  };

  return (
    <GridItem xs={12} sm={12} md={4}>
      <Card product className={classes.cardHover}>
        <CardHeader image className={classes.cardHeaderHover}>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img src={tripImage} alt="..." />
          </a>
        </CardHeader>
        <CardBody>
          <div className={classes.cardHoverUnder}>
            <Tooltip
              title="Details"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
              <Link
                to={`/history/trips/${trip.id}`}
                style={{ color: "#424242", textDecoration: "inherit" }}
              >
                <Button color="transparent" simple justIcon>
                  <ArtTrack className={classes.underChartIcons} />
                </Button>
              </Link>
            </Tooltip>
            {!passed && (
              <Tooltip
                title="Edit"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="warning" simple justIcon onClick={handleEdit}>
                  <Edit className={classes.underChartIcons} />
                </Button>
              </Tooltip>
            )}
            <Tooltip
              title="Delete"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="rose" simple justIcon onClick={handleDelete}>
                <Close className={classes.underChartIcons} />
              </Button>
              {/* <DeleteAlert tripId={trip.id} /> */}
            </Tooltip>
          </div>
          <h4 className={classes.cardProductTitle}>
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              {trip.destination.city}
            </a>
          </h4>
          <p className={classes.cardProductDesciprion}>
            {moment(trip.startDate).format("LL")} -{" "}
            {moment(trip.endDate).format("LL")}
          </p>
        </CardBody>
        <CardFooter product>
          <div className={classes.price}>
            <h4>
              {moment(trip.endDate).diff(moment(trip.startDate), "days") + 1}{" "}
              Days
            </h4>
          </div>
          <div className={`${classes.stats} ${classes.productStats}`}>
            <Place /> {trip.destination.country}
          </div>
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default TripItem;
