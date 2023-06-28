import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartLogo from "@mui/icons-material/ShoppingCart";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";

import "./AppBar.css";

function ResponsiveAppBar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "100%",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "100%",
        "&:focus": {
          width: "100%",
        },
      },
    },
  }));

  return (
    <div id="Bar">
      <div id="LogoBar">
        <ShoppingCartLogo id="Logo" />
        <div id="Text">upGrad E-Shop</div>
      </div>
      <div id="LogoBar" style={{ width: "25%" }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
      <div id="LogoBar">
        <Button
          variant="text"
          color="inherit"
          style={{ textDecoration: "underline" }}
        >
          Login
        </Button>
        <Button
          variant="text"
          color="inherit"
          style={{ textDecoration: "underline" }}
        >
          Signup
        </Button>
      </div>
    </div>
  );
}
export default ResponsiveAppBar;
