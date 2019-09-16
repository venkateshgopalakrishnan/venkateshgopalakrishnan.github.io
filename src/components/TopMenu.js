import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const TopMenu = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Navbar.Brand href="/" style={{ textAlign: "left" }}>
        <img
          src="../gv_logo.png"
          style={{
            width: "15%",
            borderBottomRightRadius: "60%",
            borderTopLeftRadius: "60%",
            borderBottomLeftRadius: "20%",
            borderTopRightRadius: "20%"
          }}
          alt="Venkatesh Gopalakrishnan"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ textAlign: "right" }}
      />
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
          &nbsp;&nbsp;
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
          &nbsp;&nbsp;
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
