import React, { useState } from "react";
import validator from "validator";
import "./Validator.css";

function Validator() {
  const [errorMessage, setErrorMessage] = useState("");

  const validateCreditCard = (value) => {
    if (validator.isCreditCard(value)) {
      setErrorMessage("Valid CreditCard Number");
    } else {
      setErrorMessage("Enter valid CreditCard Number!");
    }
  };

  return (
    <div className="card-main">
      <div className="Card">
        <h2>Validating CreditCard in ReactJS</h2>
        <span>Enter CreditCard: </span>
        <input
          type="text"
          onChange={(e) => validateCreditCard(e.target.value)}
          autofocus
        ></input>{" "}
        <br />
        <span
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {errorMessage}
        </span>
      </div>
    </div>
  );
}

export default Validator;
