import React from "react";

import ProductInfo from "../ProductInfo/ProductInfo";

import "./OrderSummary.css";

const FilterTypes = {
  ALL: "0",
  APAREL: "1",
  ELECTRONICS: "2",
  FOOTWEAR: "3",
  PERSONAL_CARE: "4",
};

const OrderSummary = (props) => {
  console.log(props.data.name);
  return (
    <div id="OrderSummaryLayout">
      <div id="ProductdescriptionLayout">
        <h>{props.data.name}</h>
        <p>Quantity: {props.data.qty}</p>
        <p>
          Category: <b>{Object.keys(FilterTypes)[props.data.type]}</b>
        </p>
        <p>
          <i>{props.data.Description}</i>
        </p>
        <p style={{ color: "red", fontFamily: "inherit", fontSize: "20px" }}>
          Total Price: &#8377; {props.data.price * props.data.qty}
        </p>
      </div>
      <div id="VerticalLine" />
      <div id="AddressDisplay">
        <h>Address Details</h>
        <p>{props.address.name}</p>
        <p>{props.address.contact}</p>
        <p>
          {" "}
          {props.address.street}, {props.address.city}
        </p>
        <p>{props.address.state}</p>
        <p>{props.address.zip}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
