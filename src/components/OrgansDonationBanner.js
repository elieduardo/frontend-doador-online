import React from "react";
import bannerImage from "../assets/images/home-2.png";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function OrgansDonationBanner() {
  const navigate = useNavigate();
  return (
    <div className="px-lg-6 px-3 pb-lg-6 pb-5">
      <Row>
        <Col
          lg={6}
          md={12}
          sm={12}
          className="d-flex justify-content-lg-start justify-content-center"
        >
          <img
            className="img-fluid-85 pb-lg-0 pb-5 p-lg-0 p-4"
            src={bannerImage}
            alt="banner-donation"
          />
        </Col>
        <Col lg={6} md={12} sm={12} className=" px-lg-0 px-4">
          <div className="title pb-4">Doação de órgãos</div>
          <div className="content-text">
            Doar órgãos é uma expressão genuína de solidariedade que pode
            transformar radicalmente a vida de indivíduos que lutam contra
            condições médicas debilitantes. Ao se tornar um doador de órgãos,
            você oferece a possibilidade de um recomeço para pacientes que
            enfrentam desafios complexos de saúde, permitindo-lhes a chance de
            viver plenamente novamente. Seu ato altruísta não apenas oferece uma
            nova oportunidade de vida, mas também representa um legado duradouro
            de compaixão e esperança. Cada doação de órgãos é um passo vital em
            direção a um futuro onde a generosidade e a empatia se unem para
            construir uma comunidade mais resiliente e solidária. Junte-se a nós
            nessa jornada de proporcionar uma nova chance de vida para aqueles
            que aguardam ansiosamente por um milagre.
          </div>
        </Col>
        <Col className="pt-3 pt-lg-5 px-5 d-flex justify-content-center">
          <Button variant="outline-primary"  onClick={() => {navigate("organs-donation")}}>LER MAIS</Button>
          <Button className="ml-2" onClick={() => {navigate("singup")}} >JUNTAR-SE</Button>
        </Col>
      </Row>
    </div>
  );
}
