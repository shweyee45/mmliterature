import React, { Component } from 'react';
import PostsHeader from './PostsHeader';
import PostsShare from './PostsShare';
import PostsDetail from './PostsDetail';
import PostsTags from './PostsTags';
import PostsAuthor from './PostsAurthor';
import PostsRelated from './PostsRelated';
import PostsComments from './PostsComments';
import PostsCommentBox from './PostsCommentBox';

class Post extends Component {
  render() {
    return (
      <div className="blog-section">
        <PostsHeader />
        <PostsShare />
        <PostsDetail />
        <PostsTags />
        <PostsAuthor />
        <PostsRelated />
        <PostsComments />
        <PostsCommentBox />
      </div>
    );
  }
}

export default Post;
