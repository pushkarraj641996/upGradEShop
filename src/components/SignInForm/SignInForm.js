import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import TextBox from "../../common/InputBox/TextBox";
import Button from "../../common/Button/Button";

import "./SignInForm.css";

const SignInForm = () => {
  return (
    <div id="FormBox">
      <LockIcon id="Icon" />
      <p id="Text">Sign In</p>
      <TextBox>Email Address</TextBox>
      <TextBox>Password</TextBox>
      <Button>SIGN IN</Button>
      <a href="#">Don't have an acount? Sign Up</a>
    </div>
  );
};

export default SignInForm;
