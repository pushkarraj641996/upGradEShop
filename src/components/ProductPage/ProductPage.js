import { React, createRef } from "react";

import QtyField from "../../common/InputBox/TextBox";
import OrderButton from "../../common/Button/Button";
import "./ProductPage.css";

const FilterTypes = {
  ALL: "0",
  APAREL: "1",
  ELECTRONICS: "2",
  FOOTWEAR: "3",
  PERSONAL_CARE: "4",
};

const ProductPage = (props) => {
  const qtyRef = createRef();

  const handlePurchaseQty = () => {
    props.cartHandler({ ...props.item, qty: qtyRef.current.value });
  };

  return (
    <div id="OuterLayout">
      <img src={props.item.imageURL} />
      <div id="ProductInfoLayout">
        <div id="Heading">
          <h2>{props.item.name}</h2>
          <p>Available Qty: {props.item.AvailableQty}</p>
        </div>
        <p>
          Category: <b>{Object.keys(FilterTypes)[props.item.type]}</b>
        </p>
        <p>
          <i>{props.item.Description}</i>
        </p>
        <p style={{ color: "red", fontFamily: "inherit", fontSize: "20px" }}>
          &#8377; {props.item.price}
        </p>
        <QtyField ref={qtyRef} inputType="number">
          Quantity
        </QtyField>
        <OrderButton var="contained" clickHandler={handlePurchaseQty}>
          PLACE ORDER
        </OrderButton>
      </div>
    </div>
  );
};

export default ProductPage;
