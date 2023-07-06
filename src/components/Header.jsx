import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate("/favourites")}>
            Favourites
          </Nav.Link>
          <Nav.Link onClick={() => navigate("/aboutus")}>AboutUs</Nav.Link>
          <Nav.Link onClick={() => navigate("/contacts")}>Contacts</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
