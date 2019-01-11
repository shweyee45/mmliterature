import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PostsRelated extends Component {
  render() {
    return (
      <div className="post-related">
        <Container>
          <Row>
            <Col>
              <div className="section-title">
                <h3 className="title">Related Posts</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={4}>
              <div className="post post-sm">
                <a className="post-img" href="blog-post.html">
                  <img src="/images/recent-posts/recent-post-1.jpg" alt="" />
                </a>
                <div className="post-body">
                  <div className="post-category">
                    <a href="category.html">Health</a>
                  </div>
                  <h3 className="post-title title-sm">
                    <Link to="/posts/1">
                      Postea senserit id eos, vivendo periculis ei qui
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
            <Col xs={12} sm={12} md={4}>
              <div className="post post-sm">
                <a className="post-img" href="blog-post.html">
                  <img src="/images/recent-posts/recent-post-2.jpg" alt="" />
                </a>
                <div className="post-body">
                  <div className="post-category">
                    <a href="category.html">Health</a>
                  </div>
                  <h3 className="post-title title-sm">
                    <Link to="/posts/1">
                      Postea senserit id eos, vivendo periculis ei qui
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
            <Col xs={12} sm={12} md={4}>
              <div className="post post-sm">
                <a className="post-img" href="blog-post.html">
                  <img src="/images/recent-posts/recent-post-3.jpg" alt="" />
                </a>
                <div className="post-body">
                  <div className="post-category">
                    <a href="category.html">Health</a>
                  </div>
                  <h3 className="post-title title-sm">
                    <Link to="/posts/1">
                      Postea senserit id eos, vivendo periculis ei qui
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

export default PostsRelated;
