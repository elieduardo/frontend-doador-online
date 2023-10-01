import React from "react";
import logo from "../assets/images/logo.png";
import { Col, Row } from "react-bootstrap";
export default function Footer() {
  return (
    <div className="container">
      <footer className="px-6 py-5 mt-5 border-top">
        <div className="d-flex justify-content-center">
          <img width={70} height={70} src={logo} />
        </div>
        <div className="d-flex justify-content-center my-4">
          <Col className="text-center" lg={1} md={2} sm={3} xs={3}>
            <a href="#" className="nav-link p-0 text-muted">
              menu
            </a>
          </Col>
          <Col className="text-center" lg={1} md={2} sm={3} xs={3}>
            <a href="#" className="nav-link p-0 text-muted">
              menu
            </a>
          </Col>
          <Col className="text-center" lg={1} md={2} sm={3} xs={3}>
            <a href="#" className="nav-link p-0 text-muted">
              menu
            </a>
          </Col>
          <Col className="text-center" lg={1} md={2} sm={3} xs={3}>
            <a href="#" className="nav-link p-0 text-muted">
              menu
            </a>
          </Col>
          <Col className="text-center" lg={1} md={2} sm={3} xs={3}>
            <a href="#" className="nav-link p-0 text-muted">
              menu
            </a>
          </Col>
        </div>
        <div className="d-flex justify-content-center">
          <p className="text-muted">© 2023</p>
        </div>
      </footer>
    </div>
  );
}
