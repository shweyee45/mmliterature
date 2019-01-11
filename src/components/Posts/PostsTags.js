import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PostsTags extends Component {
  render() {
    return (
      <div className="post-tags mb-30">
        <Container>
          <Row>
            <Col>
              <ul>
                <li>TAGS:</li>
                <li>
                  <Link to="/">Social</Link>
                </li>
                <li>
                  <Link to="/">Lifestyle</Link>
                </li>
                <li>
                  <Link to="/">Fashion</Link>
                </li>
                <li>
                  <Link to="/">Health</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PostsTags;
