import { React, createRef, useState, useEffect } from "react";

import AddressSelect from "../../common/DropDownMenu/DropDownMenu";
import TextBox from "../../common/InputBox/TextBox";
import Button from "../../common/Button/Button";

import "./AddressPage.css";

let addressList = [
  {
    name: "Pushkar Raj",
    contact: "6361881412",
    street: "4th Cross",
    city: "Bangalore",
    state: "Karanataka",
    landmark: "Panathur Lake",
    zip: "560037",
  },
  {
    name: "MS Dhoni",
    contact: "6361881422",
    street: "Harmu",
    city: "Ranchi",
    state: "Jharkhand",
    landmark: "Ring Road",
    zip: "834002",
  },
];

const AddressPage = (props) => {
  const [address, setAddress] = useState(0);

  const nameRef = createRef();
  const contactRef = createRef();
  const streetRef = createRef();
  const cityRef = createRef();
  const stateRef = createRef();
  const landmarkRef = createRef();
  const zipRef = createRef();

  useEffect(() => {
    setTimeout(() => {
      props.address(addressList[address]);
    }, 200);
  });

  const newAddressHandler = () => {
    addressList.push({
      name: nameRef.current.value,
      contact: contactRef.current.value,
      street: streetRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      landmark: landmarkRef.current.value,
      zip: zipRef.current.value,
    });
    props.address(addressList[addressList.length - 1]);
  };

  const addressSelectHandler = (event) => {
    setAddress(event.target.value);
    props.address(addressList[address]);
  };

  return (
    <div id="Layout">
      <AddressSelect
        value={address}
        clickHandler={addressSelectHandler}
        list={addressList.map((item) => {
          return item.name + " " + item.street + " " + item.city;
        })}
      />
      <p>-OR-</p>
      <div id="FormBox">
        <p id="Text">Add Address</p>
        <TextBox ref={nameRef}>Name</TextBox>
        <TextBox ref={contactRef} type="number">
          Contact
        </TextBox>
        <TextBox ref={streetRef}>Street</TextBox>
        <TextBox ref={cityRef}>City</TextBox>
        <TextBox ref={stateRef}>State</TextBox>
        <TextBox ref={landmarkRef}>Landmark</TextBox>
        <TextBox ref={zipRef} type="number">
          ZipCode
        </TextBox>
        <Button clickHandler={newAddressHandler}>SAVE ADDRESS</Button>
      </div>
    </div>
  );
};

export default AddressPage;
