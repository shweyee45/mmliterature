import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer-area">
    <Container>
      <Row className="footer-top">
        <Col xs={12} sm={12} md={4} lg={4}>
          <div className="footer-single-widget">
            <div className="footer-logo">
              <Link to="/">
                MM<span>L</span>iteratures
              </Link>
            </div>
            <div className="copywrite-text mt-30">
              <p>
                MMLiteratures is a website where user can find the variety of
                Myanmar books, novels, and articles.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <div className="footer-single-widget">
            <ul className="footer-menu d-flex justify-content-between">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Categories</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
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
                <i className="fa fa-arrow-right" />
              </button>
            </form>
          </div>
        </Col>
      </Row>

      <Row className="footer-bottom align-items-center">
        <Col xs={12} sm={12} md={12} lg={8}>
          <div className="footer-copyright">
            Copyright ©2019 All rights reserved | This template is made with{' '}
            <i className="fa fa-heart-o" aria-hidden="true" /> by{' '}
            <Link to="/">Myanmar Literatures</Link>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <ul className="footer-social">
            <li>
              <Link to="/">
                <i className="fa fa-facebook" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-twitter" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-dribbble" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-instagram" />
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
