import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ResponsiveAppBar from "./components/AppBar/AppBar";
import SignInForm from "./components/SignInForm/SignInForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Card from "./components/Card/Card";
import CategorySelector from "./components/ToggleButton/ToggleButton";
import SortSelector from "./components/DropDownMenu/DropDownMenu";
import ProductPage from "./components/ProductPage/ProductPage";
import Stepper from "./components/Stepper/Stepper";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div id="Layout">
      <ResponsiveAppBar />
      <Stepper />
      <Footer />
    </div>
  </React.StrictMode>
);
