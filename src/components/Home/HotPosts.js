import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from './Slider';

class HotPosts extends Component {
  render() {
    return (
      <div className="hotposts">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={8} className="recent-post-slider">
              <Slider />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} className="hot-post-right">
              <div className="post post-thumb">
                <a className="post-img" href="/">
                  <img src="/images/hot-post.jpg" alt="" />
                </a>
                <div className="post-body">
                  <div className="post-category">
                    <a href="/">LIFESTYLE</a>
                  </div>
                  <h3 className="post-title">
                    <a href="/">
                      Sed ut perspiciatis, unde omnis iste natus error sit
                    </a>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <a href="/">John Doe</a>
                    </li>
                    <li>20 April 2018</li>
                  </ul>
                </div>
              </div>
              <div className="post post-thumb">
                <a className="post-img" href="/">
                  <img src="/images/hot-post-2.jpg" alt="" />
                </a>
                <div className="post-body">
                  <div className="post-category">
                    <a href="/">FASHION, LIFESTYLE</a>
                  </div>
                  <h3 className="post-title">
                    <a href="/">
                      Mel ut impetus suscipit tincidunt. Cum id ullum laboramus
                      persequeris
                    </a>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <a href="/">John Doe</a>
                    </li>
                    <li>20 April 2018</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HotPosts;
