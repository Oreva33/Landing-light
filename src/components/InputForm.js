import React, { useState } from "react";
import "./InputForm.css";
import circle from "../media/multiCircle.PNG";

const InputForm = (props) => {
  const [cardNo, setcardNo] = useState("");
  const [expDate, setcexpDate] = useState("");
  const [error, seterror] = useState(false);
  const [secode, setsecode] = useState("");
  const [postcode, setpostcode] = useState("");

  const cardNumberHandler = (event) => {
    setcardNo(event.target.value);
    seterror(false);
  };

  const expirationDateHandler = (event) => {
    setcexpDate(event.target.value);
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
          />
        </div>
        <div className="fifth">
          <img src={circle} alt="radio button" />
          <p className="fifth-label">Use this card for next time purchase</p>
          <button id="fifth" className="button-1" type="submit">
            Add Card
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
