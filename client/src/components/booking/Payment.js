import React from "react";
import { useHistory } from "react-router-dom";
import "./payment.css";

const Payment = () => {
  const data = JSON.parse(localStorage.getItem("ref"));
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push("/");
    console.log("working");
  };

  return (
    <div className='ticket'>
      <div className='text-center mt'>
        <p>message: {data.message}</p>
        <p>reference: {data.reference}</p>
        <p>status: {data.status}</p>
        <p>transaction: {data.transaction}</p>
        <button type='submit' onClick={(e) => handleClick(e)}>
          Download ticket
        </button>
      </div>
    </div>
  );
};
export default Payment;
