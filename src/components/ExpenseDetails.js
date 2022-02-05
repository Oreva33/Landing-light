import React from 'react';
import "./ExpenseDetails.css";
import HorizonLine from "./HorizonLine";
import { useState } from "react";

const ExpenseDetails = () => {
    const [totalAmount, setTotalAmount] = useState("")
    const subtotalAmount = 2497
    const estimatedTax = 119.64
    const promotionalCode = -60.00

    const totalAmountHandler =() =>{
        setTotalAmount(subtotalAmount + estimatedTax + promotionalCode)
    }
  return (
    <React.Fragment>
      <div className="subtotal">
        <p>Subtotal</p>
        <p>₦{subtotalAmount}</p>
      </div>

      <div className="estimated-tax">
        <p>Estimated TAX</p>
        <p>₦{estimatedTax}</p>
      </div>

      <div className="promotional-code">
        <p>Promotional Code:<span>Z4KXLM9A</span></p>
        <p>₦{promotionalCode}</p>
      </div>
      <HorizonLine />
      <div className="estimated-tax">
        <span><button className='button-2' onClick={totalAmountHandler}>Complete payment</button></span>
        <p className='total-size'>Total: #{totalAmount}</p>
      </div>
    </React.Fragment>
  );
};

export default ExpenseDetails;
