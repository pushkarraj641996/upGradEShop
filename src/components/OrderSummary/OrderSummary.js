import React from "react";

import ProductInfo from "../ProductInfo/ProductInfo";

import "./OrderSummary.css";

const OrderSummary = props => {
    return (
        <div id="OrderSummaryLayout">
            <ProductInfo item={props.data} />
            <div id="AddressDisplay">
                <h2>Address Details</h2>
                <p>{props.address.name}</p>
                <p>{props.address.contact}</p>
                <p> {props.address.street}, {props.address.city}</p>
                <p>{props.address.state}</p>
                <p>{props.address.zip}</p>
            </div>
        </div>
    );
}

export default OrderSummary;