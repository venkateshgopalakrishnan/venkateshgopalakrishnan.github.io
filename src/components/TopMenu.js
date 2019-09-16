import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const TopMenu = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Navbar.Brand href="/">Venkatesh G</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ textColor: "white" }}>
          <NavLink
            exact
            activeStyle={{
              fontWeight: "bold"
            }}
            style={{ color: "white" }}
            to="/"
          >
            Home
          </NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink
            exact
            activeStyle={{
              fontWeight: "bold"
            }}
            style={{ color: "white" }}
            to="/resume"
          >
            Resume
          </NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink
            exact
            activeStyle={{
              fontWeight: "bold"
            }}
            style={{ color: "white" }}
            to="/projects"
          >
            Projects
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopMenu;
