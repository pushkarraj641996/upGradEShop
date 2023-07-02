import React from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState("10");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <FormHelperText>Sort By:</FormHelperText>
        <Select value={age} onChange={handleChange}>
          <MenuItem value={10}>Default</MenuItem>
          <MenuItem value={21}>Price: High to Low</MenuItem>
          <MenuItem value={22}>Price: Low to High</MenuItem>
          <MenuItem value={22}>Newest</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
