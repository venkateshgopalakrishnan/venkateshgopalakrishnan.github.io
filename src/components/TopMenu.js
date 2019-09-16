import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const TopMenu = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Navbar.Brand href="/">Venkatesh G</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ textColor: "white" }}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopMenu;
