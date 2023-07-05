import React, { forwardRef } from "react";
import TextField from "@mui/material/TextField";

import "./TextBox.css";

const InputBox = forwardRef((props, ref) => {
  return (
    <div id="TextBox">
      <TextField
        error={props.error}
        name={props.name}
        label={props.children}
        variant="outlined"
        required
        fullWidth
        type={props.inputType}
        inputRef={ref}
        onChange={props.onChange}
      />
    </div>
  );
});

export default InputBox;
