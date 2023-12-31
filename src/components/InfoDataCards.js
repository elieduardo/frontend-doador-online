import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  MdOutlinePeopleOutline,
  MdCheckCircleOutline,
  MdOutlineMedicalServices,
} from "react-icons/md";

export default function InfoDataCards() {
  return (
    <div className="px-lg-6 px-3 pb-lg-6 pb-5">
      <Row>
        <Col lg={4} md={12} sm={12} className="text-center text-lg-start py-lg-0 py-3">
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <MdOutlinePeopleOutline className="icon-card" />
            <div className="px-2">
              <div className="number-card-info">+500</div>
              <div className="text-card-sub px-4">Vidas</div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3 mt-lg-0 justify-content-lg-start info-card-text-18 text-justify">
            Mais de 500 vidas já foram ajudadas com nossas campanhas.
          </div>
        </Col>
        <Col lg={4} md={12} sm={12} className="text-center text-lg-start py-lg-0 py-3">
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <MdCheckCircleOutline className="icon-card" />
            <div className="px-2">
              <div className="number-card-info">+30</div>
              <div className="text-card-sub px-4">Hospitais</div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3 mt-lg-0 justify-content-lg-start info-card-text-18 text-justify">
            Mais de 30 hospitais são parceiros da nossa plataforma.
          </div>
        </Col>
        <Col lg={4} md={12} sm={12} className="text-center text-lg-start py-lg-0 py-3">
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <MdOutlineMedicalServices className="icon-card" />
            <div className="px-2">
              <div className="number-card-info">+200</div>
              <div className="text-card-sub px-4">Órgãos</div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3 mt-lg-0 justify-content-lg-start info-card-text-18 text-justify">
            Mais de 200 órgãos foram doados com a nossa ajuda.
          </div>
        </Col>
      </Row>
    </div>
  );
}
