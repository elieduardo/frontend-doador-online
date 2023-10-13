import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function NavBarComp({ onlyLogo = false }) {
  const navigate = useNavigate();
  if (onlyLogo)
    return (
      <Navbar expand="lg">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand onClick={() => navigate("/")}>
            <img
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Doador online logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  return (
    <Navbar expand="lg">
      <Container className="align-itens-center">
        <Navbar.Brand onClick={() => navigate("/")}>
          <img
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Doador online logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Container className="d-flex justify-content-center">
            <Nav>
              <Nav.Link href="#Menu1">Menu 1</Nav.Link>
              <Nav.Link href="#Menu2">Menu 2</Nav.Link>
              <Nav.Link href="#Menu3">Menu 3</Nav.Link>
              <Nav.Link href="#Menu4">Menu 4</Nav.Link>
              <Nav.Link href="#Menu5">Menu 5</Nav.Link>
            </Nav>
          </Container>
          <div className="d-flex justify-content-center justify-content-lg-end mt-lg-0 mt-4">
            <Button variant="none" href="login">
              Login
            </Button>
            <Button variant="primary" className="px-5" href="cadastro">
              Cadastro
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
