import React from "react";

import AddressSelect from "../../common/DropDownMenu/DropDownMenu";
import TextBox from "../../common/InputBox/TextBox";
import Button from "../../common/Button/Button";

import "./AddressPage.css";

const AddressPage = () => {
  return (
    <div id="Layout">
      <AddressSelect />
      <p>-OR-</p>
      <div id="FormBox">
        <p id="Text">Add Address</p>
        <TextBox>Name</TextBox>
        <TextBox>Contact</TextBox>
        <TextBox>Street</TextBox>
        <TextBox>City</TextBox>
        <TextBox>State</TextBox>
        <TextBox>Landmark</TextBox>
        <TextBox>ZipCode</TextBox>
        <Button>SAVE ADDRESS</Button>
      </div>
    </div>
  );
};

export default AddressPage;
