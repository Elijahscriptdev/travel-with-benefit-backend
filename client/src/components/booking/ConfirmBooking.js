import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useHistory } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

const ConfirmBooking = () => {
  const data = JSON.parse(localStorage.getItem("booking"));
  const history = useHistory();

  const config = {
    reference: data.booking_ref,
    email: data.email,
    amount: data.total_price * 100,
    publicKey: API_KEY,
  };

  const formData = {
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    departure: data.departure,
    destination: data.destination,
    bus_type: data.bus_type,
    bus_company: data.bus_company,
    travel_date: data.travel_date,
    travel_time: data.travel_time,
    price: data.price,
    seats: data.seats,
    total_price: data.total_price,
  };

  const {
    // first_name,
    // last_name,
    // email,
    // departure,
    // destination,
    // bus_type,
    // bus_company,
    // travel_date,
    // travel_time,
    price,
    seats,
    total_price = seats * price,
  } = formData;

  // const onChange = (e) =>
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });

  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    localStorage.setItem("ref", JSON.stringify(reference));
    history.push("/payment-status");
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Pay Now",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("working");
  };

  return (
    <div className='container'>
      <h1>Confirm Your Booking</h1>

      <form className='my-4' onSubmit={(e) => onSubmit(e)}>
        <div className='form-row'>
          <div className='form-group col-md-4'>
            <label>First Name</label>
            <input
              type='text'
              className='form-control'
              value={data.first_name}
              name='first_name'
              //   onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group col-md-4'>
            <label>Last Name</label>
            <input
              type='text'
              className='form-control'
              value={data.last_name}
              name='last_name'
              //   onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group col-md-4'>
            <label>Email</label>
            <input
              type='email'
              className='form-control'
              value={data.email}
              name='email'
              //   onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col-md-4'>
            <label>Departure</label>
            <input
              type='text'
              className='form-control'
              value={data.departure}
              name='departure'
              //   onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group col-md-4'>
            <label>Destination</label>
            <input
              type='text'
              className='form-control'
              value={data.destination}
              name='destination'
              //   onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group col-md-4'>
            <label>Bus</label>
            <input
              type='text'
              className='form-control'
              value={data.bus_type}
              name='bus_type'
              //   onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col-md-4'>
            <label>Company</label>
            <input
              type='text'
              className='form-control'
              value={data.bus_company}
              name='bus_company'
              //   onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group col-md-4'>
            <label>Time</label>
            <input
              type='text'
              className='form-control'
              value={data.travel_time}
              name='travel_time'
              //   onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group col-md-4'>
            <label>Date</label>
            <input
              type='text'
              className='form-control'
              value={data.travel_date}
              name='travel_date'
              //   onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col-md-4'>
            <label>Seats</label>
            <input
              className='form-control'
              value={seats}
              name='seats'
              //   onChange={(e) => onChange(e)}
            ></input>
          </div>
          <div className='form-group col-md-4'>
            <label>Price</label>
            <input
              type='text'
              className='form-control'
              value={data.price}
              name='unit_price'
              //   onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group col-md-4'>
            <label>Total Price</label>
            <input
              type='text'
              className='form-control'
              value={seats * price}
              name='total_price'
              //   onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <PaystackButton {...componentProps} />
      </form>
    </div>
  );
};

export default ConfirmBooking;
