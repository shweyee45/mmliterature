import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PostsAuthor extends Component {
  render() {
    return (
      <div className="post-author mb-30">
        <Container>
          <Row>
            <Col>
              <div className="author-title">
                <h3 className="title">
                  About <Link to="/">John Doe</Link>
                </h3>
              </div>
              <div>
                <Media className="author">
                  <div className="media-left mr-4">
                    <Link to="/author/1">
                      <img
                        width={100}
                        height={100}
                        className="align-self-start author-img media-object"
                        src="/images/author/avatar-1.jpg"
                        alt="Generic placeholder"
                      />
                    </Link>
                  </div>

                  <Media.Body>
                    {/* <h5>Media Heading</h5> */}
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                  </Media.Body>
                </Media>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PostsAuthor;
