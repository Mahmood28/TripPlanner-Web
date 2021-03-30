import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTrip } from "store/actions/tripActions";
import moment from "moment";
import { useToasts } from "react-toast-notifications";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Refresh from "@material-ui/icons/Refresh";
import Close from "@material-ui/icons/Close";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";

// core components
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";
import priceImage1 from "assets/img/card-2.jpeg";

const useStyles = makeStyles(styles);

export default function TripItem({ trip }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { addToast } = useToasts();
  const handleDelete = () => {
    addToast("Trip Deleted", {
      appearance: "warning",
      autoDismiss: true,
    });
    dispatch(deleteTrip(trip.id, history));
  };

  return (
    <GridItem xs={12} sm={12} md={4}>
      <Card product className={classes.cardHover}>
        <CardHeader image className={classes.cardHeaderHover}>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img src={priceImage1} alt="..." />
          </a>
        </CardHeader>
        <CardBody>
          <div className={classes.cardHoverUnder}>
            <Tooltip
              id="tooltip-top"
              title="Details"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="transparent" simple justIcon>
                <ArtTrack className={classes.underChartIcons} />
              </Button>
            </Tooltip>
            <Tooltip
              id="tooltip-top"
              title="Edit"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="warning" simple justIcon>
                <Edit className={classes.underChartIcons} />
              </Button>
            </Tooltip>
            <Tooltip
              id="tooltip-top"
              title="Delete"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="rose" simple justIcon onClick={handleDelete}>
                <Close className={classes.underChartIcons} />
              </Button>
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
}
