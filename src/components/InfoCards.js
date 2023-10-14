import React from "react";
import { Col, Row } from "react-bootstrap";

export default function InfoCards() {
  return (
    <div className="px-lg-6 px-3 pb-lg-6 pb-5">
      <Row>
        <Col lg={4} md={12} sm={12} className="text-center text-lg-start py-lg-0 py-3">
          <div className="info-card-title">Doação de sangue</div>
          <div className="info-card-text-18">
            Interdum et malesuada fames ac ant enterdum et malesuada fames ac ant
          </div>
        </Col>
        <Col lg={4} md={12} sm={12} className="text-center text-lg-start py-lg-0 py-3">
          <div className="info-card-title">Doação de órgãos</div>
          <div className="info-card-text-18">
            Interdum et malesuada fames ac ant enterdum et malesuada fames ac ant
          </div>
        </Col>
        <Col lg={4} md={12} sm={12} className="text-center text-lg-start py-lg-0 py-3">
          <div className="info-card-title">Doação de medúla</div>
          <div className="info-card-text-18">
            Interdum et malesuada fames ac ant enterdum et malesuada fames ac ant
          </div>
        </Col>
      </Row>
    </div>
  );
}
