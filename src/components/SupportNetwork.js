import React from "react";
import support from "../assets/images/support.png";
import { Col, Row } from "react-bootstrap";

export default function SupportNetwork() {
  return (
    <div className="px-lg-6 px-3 pb-lg-6 pb-5">
      <Row>
        <Col lg={6} md={12} sm={12} className=" px-lg-0 px-4">
          <div className="title pb-4">Rede de Apoio</div>
          <div className="content-text">
            Nossa rede de apoio é uma plataforma dedicada a compartilhar
            campanhas significativas de doação e a oferecer suporte abrangente a
            familiares de doadores de órgãos. Com uma equipe multidisciplinar
            comprometida e especializada em questões familiares relacionadas à
            doação de órgãos, nosso objetivo é fornecer recursos e orientação
            para ajudar a promover a compreensão, o conforto e a resiliência
            dentro das famílias afetadas por esse ato de generosidade. Estamos
            aqui para oferecer um espaço acolhedor e solidário, onde as
            preocupações e necessidades dos familiares de doadores de órgãos são
            atendidas com compaixão e sensibilidade. Junte-se a nós nesta
            jornada de apoio mútuo e ajude-nos a construir uma comunidade
            fortalecida e resiliente, proporcionando conforto e orientação aos
            que mais necessitam."
          </div>
        </Col>
        <Col
          lg={6}
          md={12}
          sm={12}
          className="d-flex justify-content-lg-end justify-content-center"
        >
          <img className="img-fluid-85 p-lg-0 p-6" src={support} />
        </Col>
      </Row>
    </div>
  );
}
