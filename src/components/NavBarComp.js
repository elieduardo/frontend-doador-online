import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";
import { Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import { getFirstName, isAuthenticated, logout } from "../services/auth";

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
              <Nav.Link
                className="text-center"
                onClick={() => navigate("/campaigns")}
              >
                Campanhas
              </Nav.Link>
              <Nav.Link
                className="text-center"
                onClick={() => navigate("/promotions")}
              >
                Promoções
              </Nav.Link>
              <Nav.Link
                className="text-center"
                onClick={() => navigate("/donators")}
              >
                Doadores
              </Nav.Link>
              <Nav.Link
                className="text-center"
                onClick={() => navigate("/contact")}
              >
                Contato
              </Nav.Link>
              <Nav.Link
                className="text-center"
                onClick={() => navigate("/about-us")}
              >
                Sobre nós
              </Nav.Link>
            </Nav>
          </Container>
          {isAuthenticated() ? (
            <div className="d-flex justify-content-center justify-content-lg-end mt-lg-0 mt-4">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="d-flex align-items-center"
                >
                  <FaUserCircle className="me-2" />
                  <div className="mx-2">
                    <div>{getFirstName()}</div>
                    <div className="points-text">150 pontos</div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => navigate("/profile")}>
                    Minha Conta
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      logout();
                    }}
                  >
                    Sair
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <div className="d-flex justify-content-center justify-content-lg-end mt-lg-0 mt-4">
              <Button variant="none" href="singin">
                Login
              </Button>
              <Button variant="primary" className="px-5" href="singup">
                Cadastro
              </Button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
