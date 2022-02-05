import React from "react";
import "./PaymentInfo.css";
import visa from "../media/visa.PNG";

const PaymentInfo = () => {
  return (
    <div className="payment-info">
      <div>
        <h1>Payment Information </h1>
        <p>Choose your method of payment.</p>
      </div>
      <div>
        <img className="img1" src={visa} alt="visa" />
      </div>
    </div>
  );
};

export default PaymentInfo;
