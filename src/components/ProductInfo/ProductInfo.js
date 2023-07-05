import { React } from "react";
import "./ProductInfo.css";

const FilterTypes = {
  ALL: "0",
  APAREL: "1",
  ELECTRONICS: "2",
  FOOTWEAR: "3",
  PERSONAL_CARE: "4",
};

const ProductInfo = (props) => {
  return (
    <div id="OuterLayout">
      <img src={props.item.imageURL} />
      <div id="ProductInfoLayout">
        <h2>{props.item.name}</h2>
        <p>Quantity: {props.item.qty}</p>
        <p>
          Category: <b>{Object.keys(FilterTypes)[props.item.type]}</b>
        </p>
        <p>
          <i>{props.item.Description}</i>
        </p>
        <p style={{ color: "red", fontFamily: "inherit", fontSize: "20px" }}>
          &#8377; {props.item.price}
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
