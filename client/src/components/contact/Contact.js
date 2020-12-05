import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: ""
  });

  const { email, phone, message } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value)
  }

  // const validateForm = () => {
  //   return email.length > 0 && password.length > 0;
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Success");
  };

  return (
    <div className='contact p-4'>
      <h1 className='text-center text-bold'>Get in Touch</h1>
      <Form className="contact-form" onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='email@example.com'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>

        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='tel'
            placeholder='08062540732'
            name='phone'
            value={phone}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>

        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            name='message'
            placeholder=''
            value={message}
            onChange={(e) => onChange(e)}
            required
          />
        </Form.Group>

        <Button className="btn-contact" size='lg' block>
          Send Message
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
