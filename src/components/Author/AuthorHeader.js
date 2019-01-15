import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AuthorHeader = () => (
  <div className="content-wrapper">
    <div className="page-header">
      <div
        className="page-header-bg"
        style={{ background: `url(/images/page-header-img-2.jpg)` }}
      />
      <Container>
        <Row>
          <Col md={10}>
            <div class="author media">
              <div class="media-left mr-4">
                <img
                  width="100"
                  height="100"
                  class="align-self-start author-img media-object"
                  src="/images/author/avatar-1.jpg"
                  alt="Generic placeholder"
                />
              </div>
              <div class="media-body">
                <h3 class="title">John Doe</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul class="author-social">
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
                      <i class="fa fa-google-plus" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="fa fa-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default AuthorHeader;
