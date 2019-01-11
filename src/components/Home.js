import React, { Component } from 'react';
import RecentPosts from './Home/RecentPosts';
import HotPosts from './Home/HotPosts';

class Home extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <HotPosts />
        <RecentPosts />
      </div>
    );
  }
}

export default Home;
