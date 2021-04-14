import React, { useState, useEffect, useRef } from "react";
// Components
import Button from "components/CustomButtons/Button";
import FollowItem from "views/PublicProfile/FollowItem";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  TableBody,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const FollowDialog = ({ users, isFollowers }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button color="transparent" simple onClick={() => setOpen(true)}>
        {`${users.length} ${
          isFollowers ? `Follower${users.length === 1 ? "" : "s"}` : "Following"
        }`}
      </Button>
      <Dialog open={open} onClose={handleClose} scroll={"paper"}>
        <DialogTitle id="scroll-dialog-title">
          <h4>{isFollowers ? "Followers" : "Following"}</h4>
        </DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText ref={descriptionElementRef} tabIndex={-1}>
            <Table className={classes.table}>
              <TableBody>
                {users.length ? (
                  users.map((user) => (
                    <FollowItem
                      user={user}
                      isFollowers={isFollowers}
                      key={user.username}
                    />
                  ))
                ) : (
                  <Typography align="center">
                    No {isFollowers ? " followers" : " following"}
                  </Typography>
                )}
              </TableBody>
            </Table>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="rose">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FollowDialog;
