import { React, useEffect, useState } from "react";
import ResponsiveAppBar from "./components/AppBar/AppBar";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import store from "./common/store/Store";
import SignInForm from "./components/SignInForm/SignInForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";

import "./App.css";

const App = () => {
  const [loginDisplay, setIsLoginDisplay] = useState(false);
  const [SignOffDisplay, setIsSignOffDisplay] = useState(false);

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
    <Provider store={store}>
      <div id="Layout">
        <ResponsiveAppBar onBtnClick={AuthPageHandler} />
        {loginDisplay && <SignInForm />}
        {SignOffDisplay && <SignUpForm />}
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
