import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Form, FormControl, Button } from 'react-bootstrap';
// import {ButtonToolbar, Button} from 'react-bootstrap';
import { Container, Row, Col, Collapse } from 'react-bootstrap';

class Header extends React.Component {
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
                    {/* <Row>
                        <Col>
                            <Navbar bg="" expand="xl" className="justify-content-center">
                                <Navbar.Brand href="/">MM<span>L</span>iteratures</Navbar.Brand>
                            </Navbar>
                            <Navbar bg="" expand="xl" className="justify-content-end" activeKey="/">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                    <Nav className="ml-auto">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/category/:id">Health</NavDropdown.Item>
                                            <NavDropdown.Item href="/category/:id">Lifestyle</NavDropdown.Item>
                                            <NavDropdown.Item href="/category/:id">Travel</NavDropdown.Item>
                                        </NavDropdown>

                                        <Nav.Link href="/about_us">About Us</Nav.Link>
                                        <Nav.Link href="/contact_us">Contact Us</Nav.Link>
                                        <Nav.Link 
                                        onClick={() => this.setState({ open: !open })}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}
                                        ><span><i className="fa fa-search"></i></span></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row> */}

                    <Row>
                        <Col>
                            <Navbar bg="" expand="xl" className="justify-content-center">
                                <Navbar.Brand href="/">MM<span>L</span>iteratures</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                    <Nav className="ml-auto">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/category/:id">Health</NavDropdown.Item>
                                            <NavDropdown.Item href="/category/:id">Lifestyle</NavDropdown.Item>
                                            <NavDropdown.Item href="/category/:id">Travel</NavDropdown.Item>
                                            {/* <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                                        </NavDropdown>

                                        <Nav.Link href="/about_us">About Us</Nav.Link>
                                        <Nav.Link href="/contact_us">Contact Us</Nav.Link>
                                        <Nav.Link 
                                        onClick={() => this.setState({ open: !open })}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}
                                        ><span><i className="fa fa-search"></i></span></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <Collapse in={this.state.open}>
                                <div id="example-collapse-text" className="justify-content-end">
                                    <Form inline className="ml-auto">
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                        <Button variant="search-btn">Search</Button>
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