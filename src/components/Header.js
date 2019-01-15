import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Form, FormControl, FormGroup } from 'react-bootstrap';
// import {Button, ButtonToolbar} from 'react-bootstrap';
import { Container, Row, Col, Collapse } from 'react-bootstrap';

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Navbar
                bg=""
                expand="xl"
                className="justify-content-center"
                style={{ paddingLeft: 0, paddingRight: 0 }}
              >
                <Navbar.Brand href="/">
                  MM<span>L</span>iteratures
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                  id="basic-navbar-nav"
                  className="justify-content-end"
                >
                  <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/category/1">
                        Health
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/category/1">
                        Lifestyle
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/category/1">
                        Travel
                      </NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="/about_us">About Us</Nav.Link>
                    <Nav.Link href="/contact_us">Contact Us</Nav.Link>
                    <Nav.Link
                      onClick={() => this.setState({ open: !open })}
                      aria-controls="example-collapse-text"
                      aria-expanded={open}
                    >
                      <span>
                        <i className="fa fa-search" />
                      </span>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={12} md={12} lg={6} className="ml-auto">
              <Collapse in={this.state.open}>
                <div id="example-collapse-text" className="justify-content-end">
                  <Form className="search-form ml-auto">
                    <FormGroup>
                      <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                      />
                      {/* <Button variant="search-btn">
                        <i class="fa fa-search"></i>
                      </Button> */}
                    </FormGroup>
                  </Form>
                </div>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;
