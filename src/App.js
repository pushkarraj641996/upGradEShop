import { React, useState } from "react";
import ResponsiveAppBar from "./components/AppBar/AppBar";
import Footer from "./components/Footer/Footer";

import SignInForm from "./components/SignInForm/SignInForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import { Logout } from "./common/store/Actions/AuthenticateActionPayloadCreator";
import Home from "./components/Home/Home";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

const App = () => {
  const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);
  const [loginDisplay, setIsLoginDisplay] = useState(false);
  const [SignOffDisplay, setIsSignOffDisplay] = useState(false);
  const [displayProductPage, setDisplayProductPage] = useState(false);

  const dispatch = useDispatch();

  const ProductRenderHandler = (id) => {
    setDisplayProductPage(true);
  };

  const renderMainTab = () => {
    if (isLoggedIn) {
      return <Home buyClickHandle={ProductRenderHandler} />;
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
    } else if (page === "signoff-page") {
      setIsLoginDisplay(false);
      setIsSignOffDisplay(false);
      dispatch(Logout());
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
