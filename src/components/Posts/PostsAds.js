import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PostsAds extends Component {
  render() {
    return (
      <div className="post-ads mb-30">
        <Link to="/">
          <Image src="/images/ads/ad-3.jpg" fluid className="img-responsive" />
        </Link>
      </div>
    );
  }
}

export default PostsAds;
