import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./Button.css";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#3f51b5",
      contrastText: "#fff",
    },
  },
});

const MyButton = (props) => {
  return (
    <div id="ButtonStd">
      <ThemeProvider theme={theme}>
        <Button color="neutral" variant="contained" fullWidth>
          {props.children}
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default MyButton;
