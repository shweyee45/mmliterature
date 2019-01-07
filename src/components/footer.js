import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer-area">
            <Container>
                <Row className="footer-top">
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className="footer-single-widget">
                            <div className="footer-logo">
                                <a href="/">MM<span>L</span>ibrary</a>
                            </div>
                            <div className="copywrite-text mt-30">
                                <p>MMLibrary is sed ut perspiciatis, unde omnis iste natus error sit Ne bonorum praesent cum.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className="footer-single-widget">
                            <ul className="footer-menu d-flex justify-content-between">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Categories</a></li>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Contact Us</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className="footer-single-widget">
                            <h5>Subscribe</h5>
                            <form action="/" method="post">
                                <input type="email" name="email" id="email" placeholder="Enter your mail"/>
                                <button type="button"><i class="fa fa-arrow-right"></i></button>
                            </form>
                        </div>
                    </Col>
                </Row>

                <Row className="footer-bottom align-items-center">
                    
                    <Col xs={12} sm={12} md={12} lg={8}>
                        <div className="footer-copyright">
                            Copyright ©2019 All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="/" target="_blank">Myanmar Library</a>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4}>
                        <ul className="footer-social">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;

