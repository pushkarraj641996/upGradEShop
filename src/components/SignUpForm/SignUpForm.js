import { React, createRef, useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import TextBox from "../../common/InputBox/TextBox";
import Button from "../../common/Button/Button";

import "./SignUpForm.css";
import SnackBar from "../SnackBar/SnackBar";

const SignUpForm = (props) => {
  const fnameRef = createRef();
  const lnameRef = createRef();
  const emailRef = createRef();
  const passRef = createRef();
  const phRef = createRef();

  const [validUsername, setValidUsername] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [snackBarData, setSnackBarData] = useState({
    open: false,
    sev: "success",
    message: "",
  });

  const emailValidator = (event) => {
    if (
      event.target.value != "" &&
      event.target.value.includes("@") &&
      event.target.value.includes(".com")
    ) {
      setValidUsername(true);
    } else {
      setValidUsername(false);
    }
  };

  const passwordValidator = (event) => {
    if (passRef.current.value === event.target.value) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarData({
      open: false,
      sev: snackBarData.sev,
      message: snackBarData.message,
    });
  };
  const formValidator = () => {
    if (
      fnameRef.current.value != "" &&
      lnameRef.current.value != "" &&
      emailRef.current.value != "" &&
      passRef.current.value != "" &&
      phRef.current.value != ""
    ) {
      setSnackBarData({
        open: true,
        sev: "success",
        message: "Signup Successfull",
      });
      props.newUser({
        userName: emailRef.current.value,
        password: passRef.current.value,
      });
      return true;
    } else {
      setSnackBarData({
        open: true,
        sev: "error",
        message: "SignUp Failed !!!",
      });
    }
  };

  return (
    <div id="FormBox">
      <LockIcon id="Icon" />
      <p id="Text">Sign Up</p>
      <TextBox ref={fnameRef}>First Name</TextBox>
      <TextBox ref={lnameRef}>Last Name</TextBox>
      <TextBox
        error={!validUsername}
        inputType="email"
        ref={emailRef}
        onChange={emailValidator}
      >
        Email Address
      </TextBox>
      <TextBox inputType="password" ref={passRef}>
        Password
      </TextBox>
      <TextBox
        error={!validPassword}
        inputType="password"
        onChange={passwordValidator}
      >
        Confirm Password
      </TextBox>
      <TextBox ref={phRef} inputType={"number"}>
        Contact Number
      </TextBox>
      <Button clickHandler={formValidator}>SIGN Up</Button>
      <a href="#">Already have an account? Sign In</a>
      <SnackBar
        open={snackBarData.open}
        sev={snackBarData.sev}
        onCloseHandler={handleClose}
      >
        {snackBarData.message}
      </SnackBar>
    </div>
  );
};

export default SignUpForm;
