import { React, forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import MyButton from "../../Button/Button";

const AlertDialog = (props) => {
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <div>
      <Dialog
        open={props.display}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.cancel}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Confirm deletion of Product !"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete the product?
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{ width: "50%", justifyContent: "flex-end", alignSelf: "end" }}
        >
          <MyButton
            var="contained"
            color="neutral"
            clickHandler={() => {
              props.confirm(props.id);
            }}
          >
            OK
          </MyButton>
          <MyButton
            var="outlined"
            color="neutral"
            clickHandler={() => props.cancel()}
          >
            Cancel
          </MyButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
