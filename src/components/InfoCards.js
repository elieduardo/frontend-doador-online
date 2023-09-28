import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function InfoCards() {
  return (
    <Container>
      <Row>
        <Col lg={4} md={12} sm={12} className="text-center text-lg-start py-lg-0 py-3">
          <div className="info-card-title">Doação de sangue</div>
          <div className="info-card-text">
            Interdum et malesuada fames ac ant enterdum et malesuada fames ac ant
          </div>
        </Col>
        <Col lg={4} md={12} sm={12} className="text-center text-lg-start py-lg-0 py-3">
          <div className="info-card-title">Doação de órgãos</div>
          <div className="info-card-text">
            Interdum et malesuada fames ac ant enterdum et malesuada fames ac ant
          </div>
        </Col>
        <Col lg={4} md={12} sm={12} className="text-center text-lg-start py-lg-0 py-3">
          <div className="info-card-title">Doação de medúla</div>
          <div className="info-card-text">
            Interdum et malesuada fames ac ant enterdum et malesuada fames ac ant
          </div>
        </Col>
      </Row>
    </Container>
  );
}
