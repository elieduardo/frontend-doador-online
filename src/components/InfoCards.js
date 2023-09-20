import React from "react";
import { Col } from "react-bootstrap";
import Stroke from "./Stroke";

export default function InfoCards() {
  return (
    <div className="d-flex p-5">
      <Col className="mx-4">
        <div className="info-card-title">Doação de sangue</div>
        <div className="info-card-text">
          Interdum et malesuada fames ac ant enterdum et malesuada fames ac ant
        </div>
      </Col>
      <Stroke />
      <Col className="mx-4">
        <div className="info-card-title">Doação de órgãos</div>
        <div className="info-card-text">
          Interdum et malesuada fames ac ant enterdum et malesuada fames ac ant
        </div>
      </Col>
      <Stroke />
      <Col className="mx-4">
        <div className="info-card-title">Doação de medúla</div>
        <div className="info-card-text">
          Interdum et malesuada fames ac ant enterdum et malesuada fames ac ant
        </div>
      </Col>
    </div>
  );
}
