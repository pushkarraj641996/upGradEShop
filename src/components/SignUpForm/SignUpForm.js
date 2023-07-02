import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import TextBox from "../../common/InputBox/TextBox";
import Button from "../../common/Button/Button";

import "./SignUpForm.css";

const SignUpForm = () => {
  return (
    <div id="FormBox">
      <LockIcon id="Icon" />
      <p id="Text">Sign Up</p>
      <TextBox>First Name</TextBox>
      <TextBox>Last Name</TextBox>
      <TextBox>Email Address</TextBox>
      <TextBox>Password</TextBox>
      <TextBox>Confirm Password</TextBox>
      <TextBox>Contact Number</TextBox>
      <Button>SIGN Up</Button>
      <a href="#">Already have an account? Sign In</a>
    </div>
  );
};

export default SignUpForm;
