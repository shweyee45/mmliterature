import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PostsShare extends Component {
  render() {
    return (
      <div className="post-social-share">
        <Container>
          <Row>
            <Col>
              <div className="section-row">
                <div className="post-share">
                  <Link to="/" className="social-facebook">
                    <i className="fa fa-facebook" />
                    <span>Share</span>
                  </Link>
                  <Link to="/" className="social-twitter">
                    <i className="fa fa-twitter" />
                    <span>Tweet</span>
                  </Link>
                  <Link to="/" className="social-pinterest">
                    <i className="fa fa-pinterest" />
                    <span>Pin</span>
                  </Link>
                  <Link to="/">
                    <i className="fa fa-envelope" />
                    <span>Email</span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PostsShare;
