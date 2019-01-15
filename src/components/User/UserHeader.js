import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserHeader = () => (
  <div className="content-wrapper">
    <div className="page-header">
      <div
        className="page-header-bg"
        style={{ background: `url(/images/page-header-img-2.jpg)` }}
      />
      <Container>
        <Row>
          <Col md={10}>
            <div className="author media">
              <div className="media-left mr-4">
                <img
                  width="100"
                  height="100"
                  className="align-self-start author-img media-object"
                  src="/images/author/avatar-1.jpg"
                  alt="Generic placeholder"
                />
              </div>
              <div className="media-body">
                <h3 className="title">Shwe Yee</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="followers-followings">
                  <i className="fa fa-users" aria-hidden="true" />{' '}
                  <a href="/"> 62 Followers</a>{' '}
                  <i className="ml-20 fa fa-user" aria-hidden="true" />{' '}
                  <a href="/"> 79 Following</a>
                </p>
                <ul className="author-social">
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
                      <i className="fa fa-google-plus" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-instagram" />
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

export default UserHeader;
