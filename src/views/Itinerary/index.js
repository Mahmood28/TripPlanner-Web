import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// material-ui icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";

const useStyles = makeStyles(styles);

export default function ExtendedTables() {
  const [checked, setChecked] = useState([]);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();

  const editButton = (
    <Button color="warning" simple className={classes.actionButton}>
      <Edit className={classes.icon} />
    </Button>
  );

  const deleteButton = (
    <Button color="rose" simple className={classes.actionButton}>
      <Close className={classes.icon} />
    </Button>
  );
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <h5>Day 1 (29-03-2021)</h5>
            </CardIcon>
          </CardHeader>
          <CardBody>
            <Table
              tableHead={["", "Time", "Activity"]}
              tableData={[
                ["1", "Andrew Mike", "Develop", "", [editButton, deleteButton]],
                ["2", "John Doe", "Design", "", [editButton, deleteButton]],
                ["3", "Alex Mike", "Design", "", [editButton, deleteButton]],
                [
                  "4",
                  "Mike Monday",
                  "Marketing",
                  "",
                  [editButton, deleteButton],
                ],
                [
                  "5",
                  "Paul Dickens",
                  "Communication",
                  "",
                  [editButton, deleteButton],
                ],
                {
                  purchase: true,
                  colspan: "3",
                  col: {
                    colspan: 2,
                    text: (
                      <Button color="rose" round>
                        Add Activity
                      </Button>
                    ),
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
    </GridContainer>
  );
}
