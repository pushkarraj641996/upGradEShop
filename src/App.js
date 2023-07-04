import { React, useState } from "react";
import ResponsiveAppBar from "./components/AppBar/AppBar";
import Footer from "./components/Footer/Footer";

import SignInForm from "./components/SignInForm/SignInForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Card from "./components/Card/Card";
import { useSelector } from "react-redux";

import "./App.css";

const App = () => {
  const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);
  const [loginDisplay, setIsLoginDisplay] = useState(false);
  const [SignOffDisplay, setIsSignOffDisplay] = useState(false);

  const renderMainTab = () => {
    if (isLoggedIn) {
      return <Card />;
    } else if (loginDisplay) {
      return <SignInForm />;
    } else if (SignOffDisplay) {
      return <SignUpForm />;
    }
  };

  const AuthPageHandler = (page) => {
    if (page === "login-page") {
      setIsSignOffDisplay(false);
      setIsLoginDisplay(true);
    } else if (page === "signup-page") {
      setIsLoginDisplay(false);
      setIsSignOffDisplay(true);
    }
  };

  return (
    <div id="Layout">
      <ResponsiveAppBar onBtnClick={AuthPageHandler} />
      {renderMainTab()}
      <Footer />
    </div>
  );
};

export default App;
