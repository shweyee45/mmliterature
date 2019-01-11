import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsCategories extends Component {
  render() {
    return (
      <div className="post-cats mb-30">
        <div class="section-title">
          <h2 class="title">Categories</h2>
        </div>
        <div class="category-widget">
          <ul>
            <li>
              <Link to="/">
                Lifestyle <span>451</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                Fashion <span>230</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                Technology <span>40</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                Travel <span>38</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                Health <span>24</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PostsCategories;
