import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  MdOutlinePeopleOutline,
  MdCheckCircleOutline,
  MdOutlineMedicalServices,
} from "react-icons/md";

export default function InfoDataCards() {
  return (
    <div className="d-flex p-5">
      <Col className="mx-4">
        <div className="d-flex align-items-center">
          <MdOutlinePeopleOutline className="icon-card" />
          <Row className="px-2">
            <div className="number-card-info">+500</div>
            <div className="text-card-sub px-4">Vidas</div>
          </Row>
        </div>
        <div className="info-card-text">
          Interdum et malesuada fames ac ant enterdum et malesuada fames ac ant
        </div>
      </Col>
      <Col className="mx-4">
        <div className="d-flex align-items-center">
          <MdCheckCircleOutline className="icon-card" />
          <Row className="px-2">
            <div className="number-card-info">+70</div>
            <div className="text-card-sub px-4">Hospitais</div>
          </Row>
        </div>
        <div className="info-card-text">
          Interdum et malesuada fames ac ant enterdum et malesuada fames ac ant
        </div>
      </Col>
      <Col className="mx-4">
        <div className="d-flex align-items-center">
          <MdOutlineMedicalServices className="icon-card" />
          <Row className="px-2">
            <div className="number-card-info">+500</div>
            <div className="text-card-sub px-4">Órgãos</div>
          </Row>
        </div>
        <div className="info-card-text">
          Interdum et malesuada fames ac ant enterdum et malesuada fames ac ant
        </div>
      </Col>
    </div>
  );
}
