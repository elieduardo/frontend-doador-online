import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  MdOutlinePeopleOutline,
  MdCheckCircleOutline,
  MdOutlineMedicalServices,
} from "react-icons/md";

export default function InfoDataCards() {
  return (
    <Container>
      <Row>
        <Col lg={4} md={12} sm={12} className="text-center text-lg-start py-lg-0 py-3">
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <MdOutlinePeopleOutline className="icon-card" />
            <div className="px-2">
              <div className="number-card-info">+500</div>
              <div className="text-card-sub px-4">Vidas</div>
            </div>
          </div>
          <div className="d-flex justify-content-center justify-content-lg-start info-card-text text-justify">
            Interdum et malesuada fames ac ant enterdum et malesuada fames ac ant
          </div>
        </Col>
        <Col lg={4} md={12} sm={12} className="text-center text-lg-start py-lg-0 py-3">
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start ">
            <MdCheckCircleOutline className="icon-card" />
            <div className="px-2">
              <div className="number-card-info">+70</div>
              <div className="text-card-sub px-4">Hospitais</div>
            </div>
          </div>
          <div className="d-flex justify-content-center justify-content-lg-start info-card-text text-justify">
            Interdum et malesuada fames ac ant enterdum et malesuada fames ac ant
          </div>
        </Col>
        <Col lg={4} md={12} sm={12} className="text-center text-lg-start py-lg-0 py-3">
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <MdOutlineMedicalServices className="icon-card" />
            <div className="px-2">
              <div className="number-card-info">+500</div>
              <div className="text-card-sub px-4">Órgãos</div>
            </div>
          </div>
          <div className="d-flex justify-content-center justify-content-lg-start info-card-text text-justify">
            Interdum et malesuada fames ac ant enterdum et malesuada fames ac ant
          </div>
        </Col>
      </Row>
    </Container>
  );
}
