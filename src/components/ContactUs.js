import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactUs = () => (
  <div className="content-wrapper">
    <div className="page-header">
      <div
        className="page-header-bg"
        style={{ background: `url(/images/page-header-img.jpg)` }}
      />
      <Container>
        <Row>
          <Col md={10}>
            <h1>Contact US</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="mt-30 mb-30">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div class="section-title">
              <h2 class="title">CONTACT INFORMATION</h2>
            </div>
            <p>
              Malis debet quo et, eam an lorem quaestio. Mea ex quod facer
              decore, eu nam mazim postea. Eu deleniti pertinacia ius. Ad elitr
              latine eam, ius sanctus eleifend no, cu primis graecis
              comprehensam eum. Ne vim prompta consectetuer, etiam signiferumque
              ea eum.
            </p>
            <ul class="contact mb-30">
              <li>
                <i class="fa fa-phone" /> 202-555-0194
              </li>
              <li>
                <i class="fa fa-envelope" />{' '}
                <Link to="/">callie@email.com</Link>
              </li>
              <li>
                <i class="fa fa-map-marker" /> 123 6th St.Melbourne, FL 32904
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div class="section-title">
              <h2 class="title">Mail Us</h2>
            </div>
            <Form className="post-reply">
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  {/* <Form.Label>Email</Form.Label> */}
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridSubject">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control placeholder="Subject" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridTextarea1">
                {/* <Form.Label>Example textarea</Form.Label> */}
                <Form.Control as="textarea" rows="3" placeholder="Message" />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="primary-button"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default ContactUs;
