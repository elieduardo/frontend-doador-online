import React from "react";
import logo from "../assets/images/logo.png";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <footer className="px-3 py-4 mt-5 border-top">
        <div className="d-flex justify-content-center pointer">
          <img
            width={70}
            height={70}
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <Row className="d-flex justify-content-center my-4">
          <Col className="text-center" lg={2} md={3} sm={4} xs={6}>
            <a
              className="nav-link p-0 text-muted pointer"
              onClick={() => navigate("/campaigns")}
            >
              Campanhas
            </a>
          </Col>
          <Col className="text-center" lg={2} md={3} sm={4} xs={6}>
            <a
              className="nav-link p-0 text-muted pointer"
              onClick={() => navigate("/promotions")}
            >
              Promoções
            </a>
          </Col>
          <Col className="text-center" lg={2} md={3} sm={4} xs={6}>
            <a
              className="nav-link p-0 text-muted pointer"
              onClick={() => navigate("/contact")}
            >
              Contato
            </a>
          </Col>
          <Col className="text-center" lg={2} md={3} sm={4} xs={6}>
            <a
              className="nav-link p-0 text-muted pointer"
              onClick={() => navigate("/about-us")}
            >
              Sobre nós
            </a>
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <p className="text-muted">© 2023</p>
        </div>
      </footer>
    </div>
  );
}
