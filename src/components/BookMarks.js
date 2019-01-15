import React from 'react';
import { Container, Row, Col, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostsAds from './Posts/PostsAds';
import PostsCategories from './Posts/PostsCategories';
import PostsPopular from './Posts/PostsPopular';
import BookMarkHeader from './BookMarks/BookMarkHeader';

const BookMarks = () => (
  <div className="content-wrapper">
    <BookMarkHeader />
    <div className="page-content mt-30">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={8}>
            <div>
              {/* <div class="section-title">
                <h2 class="title">Author's Posts</h2>
              </div> */}

              <ul className="list-unstyled">
                <Media as="li" className="post author-posts">
                  <Link to="/posts/1" className="post-img mr-30">
                    <img
                      className="img-responsive"
                      src="/images/author/author-post-1.jpg"
                      alt="Generic placeholder"
                    />
                  </Link>
                  <Media.Body className="post-body">
                    <div class="post-category">
                      <Link to="/category/1">Lifestyle</Link>
                      <Link to="/category/1">Travel</Link>
                    </div>
                    <h3 class="post-title">
                      <Link to="/posts/1">
                        Ne bonorum praesent cum, labitur persequeris
                        definitionem quo cu?
                      </Link>
                    </h3>
                    <ul class="post-meta">
                      <li>
                        <Link to="/author/1">John Doe</Link>
                      </li>
                      <li>20 April 2018</li>
                    </ul>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam...
                    </p> */}
                    <div class="section-row remove-bookmark text-right">
                      <a class="primary-button" href="/">
                        Remove
                      </a>
                    </div>
                  </Media.Body>
                </Media>
                <Media as="li" className="post author-posts">
                  <Link to="/posts/1" className="post-img mr-30">
                    <img
                      className="img-responsive"
                      src="/images/author/author-post-2.jpg"
                      alt="Generic placeholder"
                    />
                  </Link>
                  <Media.Body className="post-body">
                    <div class="post-category">
                      <Link to="/category/1">Lifestyle</Link>
                      <Link to="/category/1">Travel</Link>
                    </div>
                    <h3 class="post-title">
                      <Link to="/posts/1">
                        Ne bonorum praesent cum, labitur persequeris
                        definitionem quo cu?
                      </Link>
                    </h3>
                    <ul class="post-meta">
                      <li>
                        <Link to="/author/1">John Doe</Link>
                      </li>
                      <li>20 April 2018</li>
                    </ul>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam...
                    </p> */}
                    <div class="section-row remove-bookmark text-right">
                      <a class="primary-button" href="/">
                        Remove
                      </a>
                    </div>
                  </Media.Body>
                </Media>
                <Media as="li" className="post author-posts">
                  <Link to="/posts/1" className="post-img mr-30">
                    <img
                      className="img-responsive"
                      src="/images/author/author-post-3.jpg"
                      alt="Generic placeholder"
                    />
                  </Link>
                  <Media.Body className="post-body">
                    <div class="post-category">
                      <Link to="/category/1">Lifestyle</Link>
                      <Link to="/category/1">Travel</Link>
                    </div>
                    <h3 class="post-title">
                      <Link to="/posts/1">
                        Ne bonorum praesent cum, labitur persequeris
                        definitionem quo cu?
                      </Link>
                    </h3>
                    <ul class="post-meta">
                      <li>
                        <Link to="/author/1">John Doe</Link>
                      </li>
                      <li>20 April 2018</li>
                    </ul>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam...
                    </p> */}
                    <div class="section-row remove-bookmark text-right">
                      <a class="primary-button" href="/">
                        Remove
                      </a>
                    </div>
                  </Media.Body>
                </Media>
                <Media as="li" className="post author-posts">
                  <Link to="/posts/1" className="post-img mr-30">
                    <img
                      className="img-responsive"
                      src="/images/author/author-post-4.jpg"
                      alt="Generic placeholder"
                    />
                  </Link>
                  <Media.Body className="post-body">
                    <div class="post-category">
                      <Link to="/category/1">Lifestyle</Link>
                      <Link to="/category/1">Travel</Link>
                    </div>
                    <h3 class="post-title">
                      <Link to="/posts/1">
                        Ne bonorum praesent cum, labitur persequeris
                        definitionem quo cu?
                      </Link>
                    </h3>
                    <ul class="post-meta">
                      <li>
                        <Link to="/author/1">John Doe</Link>
                      </li>
                      <li>20 April 2018</li>
                    </ul>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam...
                    </p> */}
                    <div class="section-row remove-bookmark text-right">
                      <a class="primary-button" href="/">
                        Remove
                      </a>
                    </div>
                  </Media.Body>
                </Media>
                <Media as="li" className="post author-posts">
                  <Link to="/posts/1" className="post-img mr-30">
                    <img
                      className="img-responsive"
                      src="/images/author/author-post-5.jpg"
                      alt="Generic placeholder"
                    />
                  </Link>
                  <Media.Body className="post-body">
                    <div class="post-category">
                      <Link to="/category/1">Lifestyle</Link>
                      <Link to="/category/1">Travel</Link>
                    </div>
                    <h3 class="post-title">
                      <Link to="/posts/1">
                        Ne bonorum praesent cum, labitur persequeris
                        definitionem quo cu?
                      </Link>
                    </h3>
                    <ul class="post-meta">
                      <li>
                        <Link to="/author/1">John Doe</Link>
                      </li>
                      <li>20 April 2018</li>
                    </ul>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam...
                    </p> */}
                    <div class="section-row remove-bookmark text-right">
                      <a class="primary-button" href="/">
                        Remove
                      </a>
                    </div>
                  </Media.Body>
                </Media>
              </ul>
              <div class="section-row loadmore text-center">
                <Link to="/" class="primary-button">
                  Load More
                </Link>
              </div>
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

export default BookMarks;
