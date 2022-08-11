import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action3">How It Works</Nav.Link>
            <Nav.Link href="#action4">Our Rewards</Nav.Link>
            <Nav.Link href="#action5">Contact Us</Nav.Link>
          </Nav>

          <Button variant="outline-primary">Login</Button>
          <Button variant="outline-danger">Signup</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
