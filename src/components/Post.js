import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//Components
import PostsHeader from './Posts/PostsHeader';
import PostsShare from './Posts/PostsShare';
import PostsDetail from './Posts/PostsDetail';
import PostsTags from './Posts/PostsTags';
import PostsAuthor from './Posts/PostsAurthor';
import PostsRelated from './Posts/PostsRelated';
import PostsComments from './Posts/PostsComments';
import PostsCommentBox from './Posts/PostsCommentBox';
import PostsAds from './Posts/PostsAds';
import PostsCategories from './Posts/PostsCategories';
import PostsPopular from './Posts/PostsPopular';

class Post extends Component {
  render() {
    return (
      <div className="blog-section">
        <PostsHeader />
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={8}>
              <PostsShare />
              <PostsDetail />
              <PostsTags />
              <PostsAuthor />
              <PostsRelated />
              <PostsComments />
              <PostsCommentBox />
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} className="mt-30">
              <PostsAds />
              <PostsCategories />
              <PostsAds />
              <PostsPopular />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Post;
