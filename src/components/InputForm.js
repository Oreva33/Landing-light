import React, { useState, useEffect } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const [cardNo, setcardNo] = useState("4324  5433 9382 1030");
  const [expDate, setcexpDate] = useState("");
  const [error, seterror] = useState(false);
  const [secode, setsecode] = useState("");
  const [postcode, setpostcode] = useState("");
  useEffect(() => {
    const data = {
      cardNum: "4324543393821030",
      expiredDate: expDate,
    };

    props.onData(data);
  // eslint-disable-next-line 
},[] );

  const cardNumberHandler = (event) => {
    setcardNo(event.target.value);
    seterror(false);
    const data = {
      cardNum: event.target.value,
      expiredDate: expDate,
    };

    props.onData(data);
    if (data.cardNum.length < 12 || data.cardNum.length > 12) {
      seterror(true);
    }
  };

  const expirationDateHandler = (event) => {
    setcexpDate( event.target.value);
    //console.log(expDate)
    //const datee = expDate
    //console.log(typeof datee.toLocaleDateString())
  };




  const securitycodeHandler = (event) => {
    setsecode(event.target.value);
  };

  const postalcodeHandler = (event) => {
    setpostcode(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (cardNo.length > 12 || cardNo.length < 12) {
      seterror(true);
      return;
    }
    const data = {
      cardNum: cardNo,
      expiredDate: expDate,
    };
    props.onData(data);
    setcexpDate("");
    setcardNo("");
    setsecode("");
    setpostcode("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="input-form">
        <div>
          <label
            className={`first-label ${error ? "invalid" : ""} `}
            htmlFor="first"
          >
            Credit card number
          </label>
          <input
            className={`first ${error ? "invalid" : ""} `}
            id="first"
            type="number"
            value={cardNo}
            onChange={cardNumberHandler}
            placeholder={cardNo}
          />
        </div>

        <div>
          <label className="second-label" htmlFor="second">
            Expiration date
          </label>
          <input
            className="second"
            id="second"
            type="month"
            value={expDate}
            onChange={expirationDateHandler}
          />
        </div>
        <div>
          <label className="third-label" htmlFor="third">
            Security code
          </label>
          <input
            id="third"
            className="third"
            type="text"
            value={secode}
            onChange={securitycodeHandler}
            placeholder="420"
          />
        </div>
        <div>
          <label className="fourth-label" htmlFor="fourth">
            Postal Code
          </label>
          <input
            id="fourth"
            className="fourth"
            type="text"
            value={postcode}
            onChange={postalcodeHandler}
            placeholder="10119"
          />
        </div>
        <div className="fifth">
          <div className="inner-fifth">
          <input id="fifth" name="fifth" type="radio" />
          <label className="fifth-label" htmlFor="fifth">
            Use this card for next time purchase
          </label>
          </div>
          <button id="fifth" className="button-1" type="submit">
            Add Card
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
