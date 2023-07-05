import { Snackbar, Alert, Slide } from "@mui/material";
import React, { useState } from "react";

const SnackBar = (props) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={true}
      autoHideDuration={2000}
      onClose={props.onCloseHandler}
    >
      <Alert severity="success" sx={{ width: "100%" }}>
        Order Placed successfully
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
