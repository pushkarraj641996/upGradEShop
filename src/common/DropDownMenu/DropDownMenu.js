import React from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

const SelectAutoWidth = (props) => {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <FormHelperText>Sort By:</FormHelperText>
        <Select value={props.value} onChange={props.clickHandler}>
          {props.list.map((item, index) => (
            <MenuItem key={index} value={index}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default SelectAutoWidth;
