import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PostsComments extends Component {
  render() {
    return (
      <div className="post-comments mb-30">
        <Container>
          <Row>
            <Col>
              <div className="section-title">
                <h3 className="title">3 Comments</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Media>
                <div className="media-left mr-3">
                  <img
                    width={50}
                    height={50}
                    className="media-object"
                    src="/images/author/avatar-2.jpg"
                    alt="Generic placeholder"
                  />
                </div>
                <Media.Body>
                  <div className="media-heading">
                    <h4>John Doe</h4>
                    <span className="time">5 min ago</span>
                  </div>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>
                  <Link className="reply" to="/">
                    Reply
                  </Link>

                  <Media className="media-author">
                    <div className="media-left mr-3">
                      <img
                        width={50}
                        height={50}
                        className="media-object"
                        src="/images/author/avatar-1.jpg"
                        alt="Generic placeholder"
                      />
                    </div>
                    <Media.Body>
                      <div className="media-heading">
                        <h4>John Doe</h4>
                        <span className="time">5 min ago</span>
                      </div>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin commodo. Cras purus
                        odio, vestibulum in vulputate at, tempus viverra turpis.
                        Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                      </p>
                      <Link className="reply" to="/">
                        Reply
                      </Link>
                    </Media.Body>
                  </Media>
                </Media.Body>
              </Media>

              <Media>
                <div className="media-left mr-3">
                  <img
                    width={50}
                    height={50}
                    className="media-object"
                    src="/images/author/avatar-3.jpg"
                    alt="Generic placeholder"
                  />
                </div>
                <Media.Body>
                  <div className="media-heading">
                    <h4>John Doe</h4>
                    <span className="time">5 min ago</span>
                  </div>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>
                  <Link className="reply" to="/">
                    Reply
                  </Link>
                </Media.Body>
              </Media>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PostsComments;
