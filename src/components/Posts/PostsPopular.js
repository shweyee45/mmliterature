import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PostsPopular extends Component {
  render() {
    return (
      <div className="post-popular mb-30">
        <div className="section-title">
          <h2 className="title">Popular Posts</h2>
        </div>
        <div>
          <ul className="list-unstyled">
            <Media as="li" className="post post-widget">
              <Link to="/posts/1" className="post-img">
                <img
                  className="mr-3"
                  src="/images/popular-posts/widget-2.jpg"
                  alt="Generic placeholder"
                />
              </Link>
              <Media.Body className="post-body">
                <div className="post-category">
                  <Link to="/posts/1">Lifestyle</Link>
                </div>
                <h3 className="post-title">
                  <Link to="/posts/1">
                    Ne bonorum praesent cum, labitur persequeris definitionem
                    quo cu?
                  </Link>
                </h3>
              </Media.Body>
            </Media>

            <Media as="li" className="post post-widget">
              <Link to="/posts/1" className="post-img">
                <img
                  className="mr-3"
                  src="/images/popular-posts/widget-3.jpg"
                  alt="Generic placeholder"
                />
              </Link>
              <Media.Body className="post-body">
                <div className="post-category">
                  <Link to="/posts/1">Lifestyle</Link>
                </div>
                <h3 className="post-title">
                  <Link to="/posts/1">
                    Ne bonorum praesent cum, labitur persequeris definitionem
                    quo cu?
                  </Link>
                </h3>
              </Media.Body>
            </Media>

            <Media as="li" className="post post-widget">
              <Link to="/posts/1" className="post-img">
                <img
                  className="mr-3"
                  src="/images/popular-posts/widget-4.jpg"
                  alt="Generic placeholder"
                />
              </Link>
              <Media.Body className="post-body">
                <div className="post-category">
                  <Link to="/posts/1">Lifestyle</Link>
                </div>
                <h3 className="post-title">
                  <Link to="/posts/1">
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
