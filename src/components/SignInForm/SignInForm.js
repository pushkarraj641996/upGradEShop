import React, { createRef } from "react";
import { useDispatch } from "react-redux";
import LockIcon from "@mui/icons-material/Lock";
import TextBox from "../../common/InputBox/TextBox";
import Button from "../../common/Button/Button";
import { Login } from "../../common/store/Actions/AuthenticateActionPayloadCreator";

import "./SignInForm.css";

const SignInForm = () => {
  const emailRef = createRef();
  const passwordRef = createRef();

  const dispatch = useDispatch();

  const submitForm = () => {
    dispatch(Login(emailRef.current.value));
  };

  return (
    <div id="FormBox">
      <LockIcon id="Icon" />
      <p id="Text">Sign In</p>
      <TextBox name="email" inputType="email" ref={emailRef}>
        Email Address
      </TextBox>
      <TextBox name="password" inputType="password" ref={passwordRef}>
        Password
      </TextBox>
      <Button clickHandler={submitForm}>SIGN IN</Button>
      <a href="#">Don't have an acount? Sign Up</a>
    </div>
  );
};

export default SignInForm;
