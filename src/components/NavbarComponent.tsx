import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><h2>Daniel Figueroa</h2></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/work">Works</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      );
}

export default NavbarComponent;