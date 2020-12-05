import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Col, Form } from "react-bootstrap";
import { Button } from "../button/Button";
import "./HeroSection.css";

const HeroSection = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    travel_date: "",
  });

  const { departure, destination, travel_date } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // const body = JSON.stringify({ departure, destination, travel_date });
    try {
      const res = await axios.get(
        "https://travel-backend-api.herokuapp.com/travel-information/search",
        {
          params: {
            departure: departure,
            destination: destination,
            travel_date: travel_date,
          },
        },
        config
      );
      localStorage.setItem("travel-info", JSON.stringify(res.data));
      history.push("/bus/listings");
      console.log("message", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='hero-container'>
      <Form className='form' onSubmit={(e) => onSubmit(e)}>
        <p className=''>Search for available buses</p>
        <Form.Row>
          <Col className='input-form' xs={12} md={3}>
            <Form.Control
              placeholder='From'
              value={departure}
              name='departure'
              onChange={(e) => onChange(e)}
            />
          </Col>
          <Col className='input-form' xs={12} md={3}>
            <Form.Control
              placeholder='To'
              value={destination}
              name='destination'
              onChange={(e) => onChange(e)}
            />
          </Col>
          <Col className='input-form' xs={12} md={3}>
            <Form.Control
              placeholder='Date'
              value={travel_date}
              name='travel_date'
              onChange={(e) => onChange(e)}
            />
          </Col>
          <Col xs={12} md={3} className='text-center'>
            <button className='btn btn-secondary btn-form'>PROCEED</button>
          </Col>
        </Form.Row>
      </Form>

      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          BOOK NOW
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log("hey")}
        >
          CONTACT US <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
