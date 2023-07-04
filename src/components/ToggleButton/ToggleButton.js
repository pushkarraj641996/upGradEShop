import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const SelectorMenu = (props) => {
  return (
    <ToggleButtonGroup
      value={props.value}
      exclusive
      onChange={props.clickHandler}
      aria-label="Platform"
    >
      <ToggleButton value="0">All</ToggleButton>
      <ToggleButton value="1">Aparel</ToggleButton>
      <ToggleButton value="2">Electronics</ToggleButton>
      <ToggleButton value="3">Footwear</ToggleButton>
      <ToggleButton value="4">Personal Care</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SelectorMenu;
