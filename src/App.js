import { React, useState } from "react";
import ResponsiveAppBar from "./components/AppBar/AppBar";
import Footer from "./components/Footer/Footer";

import SignInForm from "./components/SignInForm/SignInForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import { Logout } from "./common/store/Actions/AuthenticateActionPayloadCreator";
import Home from "./components/Home/Home";
import ProductPage from "./components/ProductPage/ProductPage";
import CheckoutPage from "./components/Stepper/Stepper";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

const App = () => {
  const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);
  const [displayPage, setDisplayPage] = useState({ page: "", payload: null });

  const dispatch = useDispatch();

  const ProductRenderHandler = (item) => {
    setDisplayPage({ page: "Product", payload: item });
  };

  const CartrendererHandler = (item) => {
    setDisplayPage({ page: "checkout", payload: item });
  };

  const PageHandler = (page) => {
    setDisplayPage({ page: page, payload: null });
  };

  const renderMainTab = () => {
    if (displayPage.page === "signoff-page") {
      dispatch(Logout());
      return null;
    } else if (displayPage.page === "login-page") {
      return <SignInForm submitHandler={PageHandler} />;
    } else if (displayPage.page === "signup-page") {
      return <SignUpForm />;
    } else if (displayPage.page === "checkout") {
      return <CheckoutPage cartItem={displayPage.payload} />;
    } else if (isLoggedIn) {
      if (displayPage.page === "Product") {
        return (
          <ProductPage
            item={displayPage.payload}
            cartHandler={CartrendererHandler}
          />
        );
      } else {
        return <Home buyClickHandle={ProductRenderHandler} />;
      }
    }
  };

  return (
    <div id="Layout">
      <ResponsiveAppBar onBtnClick={PageHandler} />
      {renderMainTab()}
      <Footer />
    </div>
  );
};

export default App;
