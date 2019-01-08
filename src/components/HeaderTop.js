import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopHeader = () => (
  <div className="header-top">
    <Container>
      <Row>
        <Col xs={12} sm={6} md={6} lg={6} className="header-top-left">
          <ul>
            <li>
              <Link to="/">
                <i class="fa fa-facebook" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fa fa-twitter" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fa fa-dribbble" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fa fa-instagram" />
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="header-top-right">
          <ul>
            <li>
              <a href="tel:+440 012 3654 896">
                <span class="lnr lnr-phone-handset" />
                <span>+440 012 3654 896</span>
              </a>
            </li>
            <li>
              <a href="mailto:support@colorlib.com">
                <span class="lnr lnr-envelope" />
                <span>support@colorlib.com</span>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
);

export default TopHeader;
