import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class RecentPosts extends Component {
  render() {
    return (
      <div className="pt-20">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12}>
              <div className="section-title">
                <h2 className="title">Recent posts</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="post">
                <Link to="/posts/1" className="post-img">
                  <img src="/images/recent-posts/recent-post-1.jpg" alt="" />
                </Link>
                <div className="post-body">
                  <div className="post-category">
                    <Link to="/posts/1">Travel</Link>
                  </div>
                  <h3 className="post-title">
                    <Link to="/posts/1">
                      Sed ut perspiciatis, unde omnis iste natus error sit
                    </Link>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <Link to="/posts/1">John Doe</Link>
                    </li>
                    <li>20 April 2018</li>
                  </ul>
                  <p class="likes-comments">
                    <i class="fa fa-heart-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 06 Likes</Link>{' '}
                    <i class="ml-20 fa fa-comment-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 02 Comments</Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="post">
                <Link to="/posts/1" className="post-img">
                  <img src="/images/recent-posts/recent-post-2.jpg" alt="" />
                </Link>
                <div className="post-body">
                  <div className="post-category">
                    <Link to="/posts/1">Health</Link>
                  </div>
                  <h3 className="post-title">
                    <Link to="/posts/1">
                      Sed ut perspiciatis, unde omnis iste natus error sit
                    </Link>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <Link to="/posts/1">John Doe</Link>
                    </li>
                    <li>20 April 2018</li>
                  </ul>
                  <p class="likes-comments">
                    <i class="fa fa-heart-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 06 Likes</Link>{' '}
                    <i class="ml-20 fa fa-comment-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 02 Comments</Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="post">
                <Link to="/posts/1" className="post-img">
                  <img src="/images/recent-posts/recent-post-3.jpg" alt="" />
                </Link>
                <div className="post-body">
                  <div className="post-category">
                    <Link to="/posts/1">LifeStyle</Link>
                  </div>
                  <h3 className="post-title">
                    <Link to="/posts/1">
                      Sed ut perspiciatis, unde omnis iste natus error sit
                    </Link>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <Link to="/posts/1">John Doe</Link>
                    </li>
                    <li>20 April 2018</li>
                  </ul>
                  <p class="likes-comments">
                    <i class="fa fa-heart-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 06 Likes</Link>{' '}
                    <i class="ml-20 fa fa-comment-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 02 Comments</Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="post">
                <Link to="/posts/1" className="post-img">
                  <img src="/images/recent-posts/recent-post-4.jpg" alt="" />
                </Link>
                <div className="post-body">
                  <div className="post-category">
                    <Link to="/posts/1">Technology</Link>
                  </div>
                  <h3 className="post-title">
                    <Link to="/posts/1">
                      Sed ut perspiciatis, unde omnis iste natus error sit
                    </Link>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <Link to="/posts/1">John Doe</Link>
                    </li>
                    <li>20 April 2018</li>
                  </ul>
                  <p class="likes-comments">
                    <i class="fa fa-heart-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 06 Likes</Link>{' '}
                    <i class="ml-20 fa fa-comment-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 02 Comments</Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="post">
                <Link to="/posts/1" className="post-img">
                  <img src="/images/recent-posts/recent-post-5.jpg" alt="" />
                </Link>
                <div className="post-body">
                  <div className="post-category">
                    <Link to="/posts/1">Travel</Link>
                  </div>
                  <h3 className="post-title">
                    <Link to="/posts/1">
                      Sed ut perspiciatis, unde omnis iste natus error sit
                    </Link>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <Link to="/posts/1">John Doe</Link>
                    </li>
                    <li>20 April 2018</li>
                  </ul>
                  <p class="likes-comments">
                    <i class="fa fa-heart-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 06 Likes</Link>{' '}
                    <i class="ml-20 fa fa-comment-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 02 Comments</Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="post">
                <Link to="/posts/1" className="post-img">
                  <img src="/images/recent-posts/recent-post-6.jpg" alt="" />
                </Link>
                <div className="post-body">
                  <div className="post-category">
                    <Link to="/posts/1">Travel</Link>
                  </div>
                  <h3 className="post-title">
                    <Link to="/posts/1">
                      Sed ut perspiciatis, unde omnis iste natus error sit
                    </Link>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <Link to="/posts/1">John Doe</Link>
                    </li>
                    <li>20 April 2018</li>
                  </ul>
                  <p class="likes-comments">
                    <i class="fa fa-heart-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 06 Likes</Link>{' '}
                    <i class="ml-20 fa fa-comment-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 02 Comments</Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="post">
                <Link to="/posts/1" className="post-img">
                  <img src="/images/recent-posts/recent-post-7.jpg" alt="" />
                </Link>
                <div className="post-body">
                  <div className="post-category">
                    <Link to="/posts/1">Travel</Link>
                  </div>
                  <h3 className="post-title">
                    <Link to="/posts/1">
                      Sed ut perspiciatis, unde omnis iste natus error sit
                    </Link>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <Link to="/posts/1">John Doe</Link>
                    </li>
                    <li>20 April 2018</li>
                  </ul>
                  <p class="likes-comments">
                    <i class="fa fa-heart-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 06 Likes</Link>{' '}
                    <i class="ml-20 fa fa-comment-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 02 Comments</Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="post">
                <Link to="/posts/1" className="post-img">
                  <img src="/images/recent-posts/recent-post-8.jpg" alt="" />
                </Link>
                <div className="post-body">
                  <div className="post-category">
                    <Link to="/posts/1">Travel</Link>
                  </div>
                  <h3 className="post-title">
                    <Link to="/posts/1">
                      Sed ut perspiciatis, unde omnis iste natus error sit
                    </Link>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <Link to="/posts/1">John Doe</Link>
                    </li>
                    <li>20 April 2018</li>
                  </ul>
                  <p class="likes-comments">
                    <i class="fa fa-heart-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 06 Likes</Link>{' '}
                    <i class="ml-20 fa fa-comment-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 02 Comments</Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="post">
                <Link to="/posts/1" className="post-img">
                  <img src="/images/recent-posts/recent-post-1.jpg" alt="" />
                </Link>
                <div className="post-body">
                  <div className="post-category">
                    <Link to="/posts/1">Travel</Link>
                  </div>
                  <h3 className="post-title">
                    <Link to="/posts/1">
                      Sed ut perspiciatis, unde omnis iste natus error sit
                    </Link>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <Link to="/posts/1">John Doe</Link>
                    </li>
                    <li>20 April 2018</li>
                  </ul>
                  <p class="likes-comments">
                    <i class="fa fa-heart-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 06 Likes</Link>{' '}
                    <i class="ml-20 fa fa-comment-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 02 Comments</Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="post">
                <Link to="/posts/1" className="post-img">
                  <img src="/images/recent-posts/recent-post-2.jpg" alt="" />
                </Link>
                <div className="post-body">
                  <div className="post-category">
                    <Link to="/posts/1">Travel</Link>
                  </div>
                  <h3 className="post-title">
                    <Link to="/posts/1">
                      Sed ut perspiciatis, unde omnis iste natus error sit
                    </Link>
                  </h3>
                  <ul className="post-meta">
                    <li>
                      <Link to="/posts/1">John Doe</Link>
                    </li>
                    <li>20 April 2018</li>
                  </ul>
                  <p class="likes-comments">
                    <i class="fa fa-heart-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 06 Likes</Link>{' '}
                    <i class="ml-20 fa fa-comment-o" aria-hidden="true" />{' '}
                    <Link to="/posts/1"> 02 Comments</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RecentPosts;
