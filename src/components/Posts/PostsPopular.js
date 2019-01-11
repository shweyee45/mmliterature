import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PostsPopular extends Component {
  render() {
    return (
      <div className="post-popular mb-30">
        <div class="section-title">
          <h2 class="title">Popular Posts</h2>
        </div>
        <div>
          <ul className="list-unstyled">
            <Media as="li" className="post post-widget">
              <Link to="/" className="post-img">
                <img
                  className="mr-3"
                  src="/images/popular-posts/widget-2.jpg"
                  alt="Generic placeholder"
                />
              </Link>
              <Media.Body className="post-body">
                <div class="post-category">
                  <Link to="/">Lifestyle</Link>
                </div>
                <h3 class="post-title">
                  <Link to="/">
                    Ne bonorum praesent cum, labitur persequeris definitionem
                    quo cu?
                  </Link>
                </h3>
              </Media.Body>
            </Media>

            <Media as="li" className="post post-widget">
              <Link to="/" className="post-img">
                <img
                  className="mr-3"
                  src="/images/popular-posts/widget-3.jpg"
                  alt="Generic placeholder"
                />
              </Link>
              <Media.Body className="post-body">
                <div class="post-category">
                  <Link to="/">Lifestyle</Link>
                </div>
                <h3 class="post-title">
                  <Link to="/">
                    Ne bonorum praesent cum, labitur persequeris definitionem
                    quo cu?
                  </Link>
                </h3>
              </Media.Body>
            </Media>

            <Media as="li" className="post post-widget">
              <Link to="/" className="post-img">
                <img
                  className="mr-3"
                  src="/images/popular-posts/widget-4.jpg"
                  alt="Generic placeholder"
                />
              </Link>
              <Media.Body className="post-body">
                <div class="post-category">
                  <Link to="/">Lifestyle</Link>
                </div>
                <h3 class="post-title">
                  <Link to="/">
                    Ne bonorum praesent cum, labitur persequeris definitionem
                    quo cu?
                  </Link>
                </h3>
              </Media.Body>
            </Media>
          </ul>
        </div>
      </div>
    );
  }
}

export default PostsPopular;
