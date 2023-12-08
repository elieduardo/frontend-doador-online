import React, { useEffect } from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import NavBarComp from "../../../components/NavBarComp";
import Footer from "../../../components/Footer";

export default function OrgansDonations() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <NavBarComp />
      <div className={`px-5 pt-3`}>
        <Row>
          <Col
            sm={12}
            md={12}
            lg={6}
            className="title-sm text-lg-start text-center"
          >
            Doação de Órgãos
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            className="text-lg-end text-center mt-4 mt-lg-0"
          ></Col>
        </Row>
        <div className="pb-3 pb-4 mt-3 border-top" />
      </div>
      <div className="px-5 py-2">
        <div className="title-sm text-center mb-2">Doação de Órgãos</div>
        <div className="content-text">
          A doação de órgãos é um ato de altruísmo que pode transformar vidas de maneira extraordinária. Ela envolve a doação de órgãos saudáveis, como coração, fígado, rins, pulmões e outros, para pacientes que enfrentam doenças terminais ou disfunções graves desses órgãos. Essa doação é crucial para aqueles que aguardam na fila de transplante, oferecendo a oportunidade de recuperação e uma chance renovada de viver plenamente.
        </div>
        <div className="title-sm m text-center mt-4 mb-2">Benefícios da Doação</div>
        <div className="content-text">
          Ser doador de órgãos é uma oportunidade única de deixar um legado de solidariedade e compaixão, oferecendo uma nova vida a alguém que necessita desesperadamente de um transplante. Além disso, ao se tornar um doador de órgãos, você pode trazer consolo e esperança para famílias e pacientes que aguardam por essa generosidade. Essa atitude não apenas salva vidas, mas também cria um impacto duradouro, trazendo conforto e significado para aqueles que estão envolvidos nesse ato de amor ao próximo.
        </div>
        <div className="title-sm m text-center mt-4 mb-2">Dúvidas Frequentes</div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. Quais órgãos podem ser doados?</Accordion.Header>
            <Accordion.Body className="fst-italic">
              Coração, pulmões, fígado, rins, pâncreas e intestinos, entre outros.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>2. Quem pode ser um doador de órgãos?</Accordion.Header>
            <Accordion.Body className="fst-italic">
              Qualquer pessoa, independentemente de idade, pode se tornar um doador de órgãos.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>3. Preciso informar minha família sobre minha decisão de doar órgãos?</Accordion.Header>
            <Accordion.Body className="fst-italic">
              É importante comunicar sua decisão à família para que ela seja respeitada em caso de falecimento, pois a decisão final é da família do falecido.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>4. Posso doar órgãos em vida?</Accordion.Header>
            <Accordion.Body className="fst-italic">
              Sim, é possível doar órgãos em vida, como rim, parte do fígado e parte do pulmão.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>5. Existe alguma restrição para doação de órgãos?</Accordion.Header>
            <Accordion.Body className="fst-italic">
              Algumas condições de saúde podem limitar a possibilidade de doação, mas cada caso é avaliado individualmente.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Footer />
      </div>
    </>
  );
}
