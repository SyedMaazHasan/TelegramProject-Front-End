import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Navbar, Nav } from "react-bootstrap";
class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Telegram-Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="../AddEmailForm" style={{ color: "#000000" }}>
                AddEmailForm
              </Nav.Link>

              <Nav.Link href="../MainPage" style={{ color: "#000000" }}>
                MainPage
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Navigation;
