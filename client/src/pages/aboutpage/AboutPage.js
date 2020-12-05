import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AboutPage.css";

function AboutPage() {
  return (
    <>
      <Jumbotron fluid className='jumbotron text-white'>
        <Container className='text-center'>
          <h4>
            <Link to='/' className='text-white'>
              Home/
            </Link>
            About us
          </h4>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
      <Container className='welcome my-5'>
        <div className='about-title text-center m-5'>
          <h2>WELCOME TO TRAVEL</h2>
        </div>
        <Row>
          <Col xs={12} md={6} className='text-center m-auto'>
            <h3>Probably the best place to book a ticket</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
              tincidunt lorem. Duis gravida, dui nec lacinia sollicitudin, urna
              ligula laoreet diam, mattis fermentum risus nisi a mi. Suspendisse
              ut quam blandit, bibendum nibh vel, condimentum est. Donec nisl
              odio, facilisis sed elementum ac, porta ut lacus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
              tincidunt lorem. Duis gravida, dui nec lacinia sollicitudin, urna
              ligula laoreet diam, mattis fermentum risus nisi a mi. Suspendisse
              ut quam blandit, bibendum nibh vel, condimentum est. Donec nisl
              odio, facilisis sed elementum ac, porta ut lacus.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1605813064/narciso-arellano-773s0MrPTMA-unsplash_sxmnmy.jpg'
              alt='img'
              className='img-fluid'
            />
          </Col>
        </Row>
      </Container>
      <Container className='text-center my-5 my-auto service'>
        <Row>
          <Col xs={12} md={6}>
            <div className='our-services'>
              <h3>Our Services</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus quaerat, ullam accusantium maiores libero ab.
              </p>
            </div>
            <img
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1605813060/cedric-blondeau-n9-fnypa6U0-unsplash_h8oila.jpg'
              alt='img'
              className='img-fluid'
            />
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <Col xs={12} md={6}>
                <div className='choose-us-content text-center'>
                  <i className='fas icon fa-map-marker-alt'></i>
                  <h5>Diverse Destinations</h5>
                  <p>
                    orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className='choose-us-content text-center'>
                  <i className='fas icon fa-money-check'></i>
                  <h5>Value for Money</h5>
                  <p>
                    orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className='choose-us-content text-center'>
                  <i className='fas icon fa-globe-africa'></i>
                  <h5>Beautiful Places</h5>
                  <p>
                    orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className='choose-us-content text-center'>
                  <i className='fas icon fa-location-arrow'></i>
                  <h5>Passionate Travel</h5>
                  <p>
                    orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* <Container fluid className='choose-us text-center'>
        <div className=' text-center mb-5'>
          <h1>Our Team</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt utllaf
          </p>
        </div>
        <Row>
          <Col xs={12} md={3}>
            <Card className='card-color'>
              <Card.Img
                variant='top'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1570185815/image_3_klbnao.png'
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card className='card-color'>
              <Card.Img
                variant='top'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1570185801/image_2.1_qc4ywr.png'
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card className='card-color'>
              <Card.Img
                variant='top'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1570185786/image_2_qn5ndq.png'
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card className='card-color'>
              <Card.Img
                variant='top'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1570185786/image_2_qn5ndq.png'
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default AboutPage;
