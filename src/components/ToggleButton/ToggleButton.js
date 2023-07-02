import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const SelectorMenu = () => {
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [alignment, setAlignment] = React.useState("web");
  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SelectorMenu;
