import React from "react";

import OrderButton from "../../common/Button/Button";
import "./ItemsSummary.css";

const ItemsSummary = () => {
  return (
    <div id="OuterLayout">
      <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png/mxw_2256,f_auto" />
      <div id="ProductInfoLayout">
        <div id="Heading">
          <h3>Iphone 14</h3>
          <p>Qty: 1</p>
        </div>
        <p>Category: Electronics</p>
        <p>Description</p>
        <p>Total Price: &#8377; 100000</p>
        <OrderButton>NEXT</OrderButton>
      </div>
    </div>
  );
};

export default ItemsSummary;
