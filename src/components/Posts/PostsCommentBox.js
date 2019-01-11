import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class PostsCommentBox extends Component {
  render() {
    return (
      <div className="post-comment-box mb-30">
        <Container>
          <Row>
            <Col>
              <div className="section-title">
                <h3 className="title">Leave a reply</h3>
              </div>
              <Form className="post-reply">
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridName">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control placeholder="Name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridTextarea1">
                  {/* <Form.Label>Example textarea</Form.Label> */}
                  <Form.Control as="textarea" rows="3" placeholder="Message" />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="primary-button"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PostsCommentBox;
