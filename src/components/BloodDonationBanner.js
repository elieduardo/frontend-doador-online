import React from "react";
import bannerImage from "../assets/images/home-3.png";
import { Col, Row } from "react-bootstrap";

export default function DonationBanner() {
  return (
    <div className="px-lg-6 px-3 pb-lg-6 pb-5">
      <Row>
        <Col lg={6} md={12} sm={12} className=" px-lg-0 px-4">
          <div className="title pb-4">Doação de sangue</div>
          <div className="content-text">
            A doação de sangue, além de ser um ato de generosidade, representa
            um elo vital na rede de cuidados de saúde, fornecendo um suprimento
            essencial para indivíduos em situações críticas, como pacientes com
            câncer, vítimas de acidentes graves e pessoas submetidas a
            procedimentos médicos complexos. Ao doar sangue, você está
            contribuindo diretamente para a possibilidade de salvar vidas e
            garantir tratamentos essenciais para os mais necessitados. Seja
            parte integrante dessa rede de solidariedade e marque presença no
            movimento de doadores comprometidos em oferecer esperança e conforto
            a pacientes que lutam pela recuperação.
          </div>
        </Col>
        <Col
          lg={6}
          md={12}
          sm={12}
          className="d-flex justify-content-lg-end justify-content-center"
        >
          <img className="img-fluid-85 p-lg-0 p-4" src={bannerImage} alt="banner-image"/>
        </Col>
      </Row>
    </div>
  );
}
