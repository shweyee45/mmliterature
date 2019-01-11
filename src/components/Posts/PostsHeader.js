import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PostsHeader extends Component {
  render() {
    return (
      <div id="post-header" className="page-header">
        <div
          className="page-header-bg"
          style={{ background: `url(/images/blogs/header-img.jpg)` }}
        />
        <Container>
          <Row>
            <Col md={10}>
              <div className="post-category">
                <Link to="/">Lifestyle</Link>
              </div>
              <h1>
                Mel ut impetus suscipit tincidunt. Cum id ullum laboramus
                persequeris.
              </h1>
              <ul className="post-meta">
                <li>
                  <Link to="/author/1">John Doe</Link>
                </li>
                <li>20 April 2018</li>
                <li>
                  <i className="fa fa-comments" /> 3
                </li>
                <li>
                  <i className="fa fa-eye" /> 807
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PostsHeader;
