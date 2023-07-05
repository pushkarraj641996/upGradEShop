import React, { createRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LockIcon from "@mui/icons-material/Lock";
import TextBox from "../../common/InputBox/TextBox";
import Button from "../../common/Button/Button";
import { Login } from "../../common/store/Actions/AuthenticateActionPayloadCreator";

import "./SignInForm.css";

const SignInForm = (props) => {
  const emailRef = createRef();
  const passwordRef = createRef();

  const [validUsername, setValidUsername] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const dispatch = useDispatch();

  const submitForm = () => {
    if (
      validateUsername(emailRef.current.value) &
      validatePassword(passwordRef.current.value)
    ) {
      console.log("Submit");
      props.authdata.map((user) => {
        if (
          user.userName === emailRef.current.value &&
          user.password === passwordRef.current.value
        ) {
          dispatch(Login(emailRef.current.value));
          props.submitHandler({
            page: "home-page",
            payload: null,
          });
        }
      });
    }
  };

  const validateUsername = (username) => {
    if (username != "" && username.includes("@") && username.includes(".com")) {
      setValidUsername(true);
      return true;
    } else {
      setValidUsername(false);
      return false;
    }
  };

  const validatePassword = (password) => {
    if (password != "" && password.length > 0) {
      setValidPassword(true);
      return true;
    } else {
      setValidPassword(false);
      return false;
    }
  };

  const updateUsername = (event) => {
    validateUsername(event.target.value.trim());
  };

  const updatePassword = (event) => {
    validatePassword(event.target.value.trim());
  };

  return (
    <div id="FormBox">
      <LockIcon id="Icon" />
      <p id="Text">Sign In</p>
      <TextBox
        error={!validUsername}
        name="email"
        inputType="email"
        ref={emailRef}
        onChange={updateUsername}
      >
        Email Address
      </TextBox>
      <TextBox
        error={!validPassword}
        name="password"
        inputType="password"
        ref={passwordRef}
        onChange={updatePassword}
      >
        Password
      </TextBox>
      <Button var="contained" clickHandler={submitForm}>
        SIGN IN
      </Button>
      <a href="#">Don't have an acount? Sign Up</a>
    </div>
  );
};

export default SignInForm;
