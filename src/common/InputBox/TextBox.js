import React from "react";
import TextField from "@mui/material/TextField";

import "./TextBox.css";

const InputBox = (props) => {
  return (
    <div id="TextBox">
      <TextField
        id="outlined-basic"
        label={props.children}
        variant="outlined"
        required
        fullWidth
      />
    </div>
  );
};

export default InputBox;
