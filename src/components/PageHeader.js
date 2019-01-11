import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class PageHeader extends Component {
  render() {
    return (
      <div className="page-header">
        <div
          className="page-header-bg"
          style={{ background: `url(/images/page-header-img.jpg)` }}
        />
        <Container>
          <Row>
            <Col md={10}>
              <h1>ABOUT US</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
