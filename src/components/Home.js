import React, { Component } from 'react';
import RecentPosts from './RecentPosts';
import HotPosts from './HotPosts';

class Home extends Component {
  render() {
    return (
      <div>
        <HotPosts />
        <RecentPosts />
      </div>
    );
  }
}

export default Home;
