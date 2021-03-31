import React from "react";
import { useDispatch } from "react-redux";
import { deleteActivity } from "store/actions/tripActions";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// material-ui icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
// core components
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import ActivityForm from "views/Itinerary/ActivityForm";
import EditForm from "views/Itinerary/EditForm";

import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";

const useStyles = makeStyles(styles);

const DayTable = ({ day }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const _activities = day.activities.sort(
  //   (a, b) => a.DayActivity.startTime - b.DayActivity.startTime
  // );
  // console.log("sorted activities", _activities);

  const editButton = (activityNum, day, activityId) => {
    return (
      <EditForm
        activityNum={activityNum}
        day={day}
        activityId={activityId}
        key={activityId}
      />
    );
  };

  const deleteButton = (dayId, activityId) => {
    return (
      <Button
        color="rose"
        simple
        className={classes.actionButton}
        onClick={() => dispatch(deleteActivity({ dayId, activityId }))}
      >
        <Close className={classes.icon} />
      </Button>
    );
  };

  let data = [["", "", "Start your day plan by adding activities", "", ""]];

  if (day.activities.length > 0) {
    data = day.activities.map((activity, idx) => [
      `${idx + 1}`,
      `${activity.DayActivity.startTime.slice(
        0,
        -3
      )} -${activity.DayActivity.endTime.slice(0, -3)}`,
      activity.name,
      "",
      [
        editButton(idx + 1, day, activity.id),
        deleteButton(day.id, activity.id),
      ],
    ]);
  }

  return (
    <GridItem xs={12}>
      <Card>
        <CardHeader color="rose" icon>
          <CardIcon color="rose">
            <h5>
              Day {day.day} ({day.date.split("-").reverse().join("-")})
            </h5>
          </CardIcon>
        </CardHeader>
        <CardBody>
          <Table
            tableHead={["", "Time", "Activity"]}
            tableData={[
              ...data,
              {
                purchase: true,
                colspan: "3",
                col: {
                  colspan: 2,
                  text: <ActivityForm day={day.day} />,
                },
              },
            ]}
            customCellClasses={[classes.center, classes.right, classes.right]}
            customClassesForCells={[0, 4, 5]}
            customHeadCellClasses={[
              classes.center,
              classes.right,
              classes.right,
            ]}
            customHeadClassesForCells={[0, 4, 5]}
          />
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default DayTable;
