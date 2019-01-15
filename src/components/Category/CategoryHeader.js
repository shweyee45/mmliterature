import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoryHeader = () => (
  <div className="content-wrapper">
    <div className="page-header">
      <div
        className="page-header-bg"
        style={{ background: `url(/images/page-header-img-2.jpg)` }}
      />
      <Container>
        <Row>
          <Col md={10}>
            <h1>LifeStyle</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default CategoryHeader;
