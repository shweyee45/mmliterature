import React from 'react';
import { Container, Row, Col, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostsAds from './Posts/PostsAds';
import PostsCategories from './Posts/PostsCategories';
import PostsPopular from './Posts/PostsPopular';
import UserHeader from './User/UserHeader';

const User = () => (
  <div className="content-wrapper">
    <UserHeader />
    <div className="page-content mt-30">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={8}>
            <div className="favourite-posts">
              <div className="section-title">
                <h3 className="title">Favourite Posts</h3>
              </div>
              <Row>
                <Col xs={12} sm={12} md={4}>
                  <div className="post post-sm">
                    <Link to="/" className="post-img">
                      <img
                        src="/images/recent-posts/recent-post-1.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="post-body">
                      <div className="post-category">
                        <Link to="/category/1">Health</Link>
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
                    <Link to="/" className="post-img">
                      <img
                        src="/images/recent-posts/recent-post-2.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="post-body">
                      <div className="post-category">
                        <Link to="/category/1">Health</Link>
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
                    <Link to="/" className="post-img">
                      <img
                        src="/images/recent-posts/recent-post-3.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="post-body">
                      <div className="post-category">
                        <Link to="/category/1">Health</Link>
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
              <div className="section-row loadmore text-center">
                <Link to="/" className="primary-button">
                  Load More
                </Link>
              </div>
            </div>

            <div className="user-own-posts">
              <div className="section-title">
                <h2 className="title">User's Posts</h2>
              </div>
              <ul className="list-unstyled">
                <Media as="li" className="post author-posts">
                  <Link to="/" className="post-img mr-30">
                    <img
                      className="img-responsive"
                      src="/images/author/author-post-1.jpg"
                      alt="Generic placeholder"
                    />
                  </Link>
                  <Media.Body className="post-body">
                    <div className="post-category">
                      <Link to="/category/1">Lifestyle</Link>
                      <Link to="/category/1">Travel</Link>
                    </div>
                    <h3 className="post-title">
                      <Link to="/posts/1">
                        Ne bonorum praesent cum, labitur persequeris
                        definitionem quo cu?
                      </Link>
                    </h3>
                    <ul className="post-meta">
                      <li>
                        <Link to="/author/1">John Doe</Link>
                      </li>
                      <li>20 April 2018</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam...
                    </p>
                  </Media.Body>
                </Media>
                <Media as="li" className="post author-posts">
                  <Link to="/" className="post-img mr-30">
                    <img
                      className="img-responsive"
                      src="/images/author/author-post-2.jpg"
                      alt="Generic placeholder"
                    />
                  </Link>
                  <Media.Body className="post-body">
                    <div className="post-category">
                      <Link to="/category/1">Lifestyle</Link>
                      <Link to="/category/1">Travel</Link>
                    </div>
                    <h3 className="post-title">
                      <Link to="/posts/1">
                        Ne bonorum praesent cum, labitur persequeris
                        definitionem quo cu?
                      </Link>
                    </h3>
                    <ul className="post-meta">
                      <li>
                        <Link to="/author/1">John Doe</Link>
                      </li>
                      <li>20 April 2018</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam...
                    </p>
                  </Media.Body>
                </Media>
                <Media as="li" className="post author-posts">
                  <Link to="/" className="post-img mr-30">
                    <img
                      className="img-responsive"
                      src="/images/author/author-post-3.jpg"
                      alt="Generic placeholder"
                    />
                  </Link>
                  <Media.Body className="post-body">
                    <div className="post-category">
                      <Link to="/category/1">Lifestyle</Link>
                      <Link to="/category/1">Travel</Link>
                    </div>
                    <h3 className="post-title">
                      <Link to="/posts/1">
                        Ne bonorum praesent cum, labitur persequeris
                        definitionem quo cu?
                      </Link>
                    </h3>
                    <ul className="post-meta">
                      <li>
                        <Link to="/author/1">John Doe</Link>
                      </li>
                      <li>20 April 2018</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam...
                    </p>
                  </Media.Body>
                </Media>
                <Media as="li" className="post author-posts">
                  <Link to="/" className="post-img mr-30">
                    <img
                      className="img-responsive"
                      src="/images/author/author-post-4.jpg"
                      alt="Generic placeholder"
                    />
                  </Link>
                  <Media.Body className="post-body">
                    <div className="post-category">
                      <Link to="/category/1">Lifestyle</Link>
                      <Link to="/category/1">Travel</Link>
                    </div>
                    <h3 className="post-title">
                      <Link to="/posts/1">
                        Ne bonorum praesent cum, labitur persequeris
                        definitionem quo cu?
                      </Link>
                    </h3>
                    <ul className="post-meta">
                      <li>
                        <Link to="/author/1">John Doe</Link>
                      </li>
                      <li>20 April 2018</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam...
                    </p>
                  </Media.Body>
                </Media>
                <Media as="li" className="post author-posts">
                  <Link to="/" className="post-img mr-30">
                    <img
                      className="img-responsive"
                      src="/images/author/author-post-5.jpg"
                      alt="Generic placeholder"
                    />
                  </Link>
                  <Media.Body className="post-body">
                    <div className="post-category">
                      <Link to="/category/1">Lifestyle</Link>
                      <Link to="/category/1">Travel</Link>
                    </div>
                    <h3 className="post-title">
                      <Link to="/posts/1">
                        Ne bonorum praesent cum, labitur persequeris
                        definitionem quo cu?
                      </Link>
                    </h3>
                    <ul className="post-meta">
                      <li>
                        <Link to="/author/1">John Doe</Link>
                      </li>
                      <li>20 April 2018</li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam...
                    </p>
                  </Media.Body>
                </Media>
              </ul>
              <div className="section-row loadmore text-center">
                <Link to="/" className="primary-button">
                  Load More
                </Link>
              </div>
            </div>

            <div className="follower-list mb-30">
              <div className="section-title">
                <h2 className="title">Follwers</h2>
              </div>
              <Row>
                <Col xs={12} sm={12} md={6} lg={4} mdOffset={3} lgOffset={3}>
                  <div className="users-follwers users-sm" as="li">
                    <Link to="/user/1" className="user-img">
                      <img src="/images/author/avatar-1.jpg" alt="" />
                    </Link>
                    <div>
                      <h3 className="user-title title-sm">
                        <Link to="/user/1">Ohmmar</Link>
                      </h3>
                      <p class="no-follows">
                        <i class="fa fa-users" aria-hidden="true" />{' '}
                        <a href="/"> 62 Followers</a>{' '}
                        <i class="ml-20 fa fa-user" aria-hidden="true" />{' '}
                        <a href="/"> 79 Following</a>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} mdOffset={3} lgOffset={3}>
                  <div className="users-follwers users-sm" as="li">
                    <Link to="/user/1" className="user-img">
                      <img src="/images/author/avatar-2.jpg" alt="" />
                    </Link>
                    <div>
                      <h3 className="user-title title-sm">
                        <Link to="/user/1">Ye Maung</Link>
                      </h3>
                      <p class="no-follows">
                        <i class="fa fa-users" aria-hidden="true" />{' '}
                        <a href="/"> 62 Followers</a>{' '}
                        <i class="ml-20 fa fa-user" aria-hidden="true" />{' '}
                        <a href="/"> 79 Following</a>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} mdOffset={3} lgOffset={3}>
                  <div className="users-follwers users-sm" as="li">
                    <Link to="/user/1" className="user-img">
                      <img src="/images/author/avatar-3.jpg" alt="" />
                    </Link>
                    <div>
                      <h3 className="user-title title-sm">
                        <Link to="/user/1">Cho Zin</Link>
                      </h3>
                      <p class="no-follows">
                        <i class="fa fa-users" aria-hidden="true" />{' '}
                        <a href="/"> 62 Followers</a>{' '}
                        <i class="ml-20 fa fa-user" aria-hidden="true" />{' '}
                        <a href="/"> 79 Following</a>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="following-list mb-30">
              <div className="section-title">
                <h2 className="title">Follwings</h2>
              </div>
              <Row>
                <Col xs={12} sm={12} md={6} lg={4} mdOffset={3} lgOffset={3}>
                  <div className="users-follwers users-sm" as="li">
                    <Link to="/user/1" className="user-img">
                      <img src="/images/author/avatar-3.jpg" alt="" />
                    </Link>
                    <div>
                      <h3 className="user-title title-sm">
                        <Link to="/user/1">Ohmmar</Link>
                      </h3>
                      <p class="no-follows">
                        <i class="fa fa-users" aria-hidden="true" />{' '}
                        <a href="/"> 62 Followers</a>{' '}
                        <i class="ml-20 fa fa-user" aria-hidden="true" />{' '}
                        <a href="/"> 79 Following</a>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} mdOffset={3} lgOffset={3}>
                  <div className="users-follwers users-sm" as="li">
                    <Link to="/user/1" className="user-img">
                      <img src="/images/author/avatar-2.jpg" alt="" />
                    </Link>
                    <div>
                      <h3 className="user-title title-sm">
                        <Link to="/user/1">Ye Maung</Link>
                      </h3>
                      <p class="no-follows">
                        <i class="fa fa-users" aria-hidden="true" />{' '}
                        <a href="/"> 62 Followers</a>{' '}
                        <i class="ml-20 fa fa-user" aria-hidden="true" />{' '}
                        <a href="/"> 79 Following</a>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} mdOffset={3} lgOffset={3}>
                  <div className="users-follwers users-sm" as="li">
                    <Link to="/user/1" className="user-img">
                      <img src="/images/author/avatar-1.jpg" alt="" />
                    </Link>
                    <div>
                      <h3 className="user-title title-sm">
                        <Link to="/user/1">Cho Zin</Link>
                      </h3>
                      <p class="no-follows">
                        <i class="fa fa-users" aria-hidden="true" />{' '}
                        <a href="/"> 62 Followers</a>{' '}
                        <i class="ml-20 fa fa-user" aria-hidden="true" />{' '}
                        <a href="/"> 79 Following</a>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} className="">
            <PostsAds />
            <PostsCategories />
            <PostsAds />
            <PostsPopular />
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default User;
