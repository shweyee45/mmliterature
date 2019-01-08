import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="footer-area">
    <Container>
      <Row className="footer-top">
        <Col xs={12} sm={12} md={4} lg={4}>
          <div className="footer-single-widget">
            <div className="footer-logo">
              <a>
                MM<span>L</span>ibrary
              </a>
            </div>
            <div className="copywrite-text mt-30">
              <p>
                MMLibrary is sed ut perspiciatis, unde omnis iste natus error
                sit Ne bonorum praesent cum.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <div className="footer-single-widget">
            <ul className="footer-menu d-flex justify-content-between">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Categories</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <div className="footer-single-widget">
            <h5>Subscribe</h5>
            <form action="/" method="post">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your mail"
              />
              <button type="button">
                <i class="fa fa-arrow-right" />
              </button>
            </form>
          </div>
        </Col>
      </Row>

      <Row className="footer-bottom align-items-center">
        <Col xs={12} sm={12} md={12} lg={8}>
          <div className="footer-copyright">
            Copyright ©2019 All rights reserved | This template is made with{' '}
            <i class="fa fa-heart-o" aria-hidden="true" /> by{' '}
            <a target="_blank">Myanmar Library</a>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <ul className="footer-social">
            <li>
              <a>
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a>
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a>
                <i className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a>
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
