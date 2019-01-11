import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from './Slider';
import { Link } from 'react-router-dom';

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
                <Link className="post-img" to="/posts/1">
                  <img src="/images/hot-post.jpg" alt="" />
                </Link>
                <div className="post-body">
                  <div className="post-category">
                    <Link to="/posts/1">LIFESTYLE</Link>
                  </div>
                  <h3 className="post-title">
                    <Link to="/posts/1">
                      Sed ut perspiciatis, unde omnis iste natus error sit
                    </Link>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <Link to="/author/1">John Doe</Link>
                    </li>
                    <li>20 April 2018</li>
                  </ul>
                </div>
              </div>
              <div className="post post-thumb">
                <Link className="post-img" to="/posts/1">
                  <img src="/images/hot-post-2.jpg" alt="" />
                </Link>
                <div className="post-body">
                  <div className="post-category">
                    <Link to="/posts/1">FASHION, LIFESTYLE</Link>
                  </div>
                  <h3 className="post-title">
                    <Link to="/posts/1">
                      Mel ut impetus suscipit tincidunt. Cum id ullum laboramus
                      persequeris
                    </Link>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <Link to="/author/1">John Doe</Link>
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
