import { Snackbar, Alert, Slide } from "@mui/material";
import React, { useState } from "react";

const SnackBar = (props) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={props.open}
      autoHideDuration={2000}
      onClose={props.onCloseHandler}
    >
      <Alert severity={props.sev} sx={{ width: "100%" }}>
        {props.children}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
