import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="https://urmat96.github.io/Hakaton/">
          Home
        </Navbar.Brand>
        <Navbar.Brand href="/resume">Resume</Navbar.Brand>
        <Navbar.Brand href="/skills">Skills</Navbar.Brand>
        <Navbar.Brand href="/about">About Me</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
