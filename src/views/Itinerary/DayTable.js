import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
// Components
import GridItem from "components/Grid/GridItem";
import Table from "components/Table/Table";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardIcon from "components/Card/CardIcon";
import CardHeader from "components/Card/CardHeader";
import ActivityForm from "views/Itinerary/ActivityForm";
import Buttons from "views/Itinerary/Buttons";
// Styling
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle";
const useStyles = makeStyles(styles);

const DayTable = ({ day }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const sortedActivities = day.activities.sort(
    (a, b) =>
      moment.duration(a.DayActivity.startTime) -
      moment.duration(b.DayActivity.startTime)
  );

  let data = [["", "", "Start your day plan by adding activities", "", ""]];

  if (sortedActivities.length > 0) {
    data = sortedActivities.map((activity, idx) => [
      `${idx + 1}`,
      `${activity.DayActivity.startTime.slice(
        0,
        -3
      )} -${activity.DayActivity.endTime.slice(0, -3)}`,
      activity.DayActivity.name,
      "",
      [
        <Buttons
          activityNum={idx + 1}
          day={day}
          dayId={day.id}
          activityId={activity.id}
        />,
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
                  text: <ActivityForm day={day.day} dayId={day.id} />,
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
