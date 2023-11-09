import React, { useEffect } from "react";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import { Col, Row } from "react-bootstrap";

export default function AboutUs() {
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
            Sobre nós
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
        <div className="title-sm text-center mb-2">Nossa História</div>
        <div className="content-text">
          A nossa comunidade dedicada à promoção da conscientização e
          importância da doação de órgãos e sangue. Nosso compromisso é com a
          vida e com o apoio a indivíduos e famílias que enfrentam desafios de
          saúde. Com uma equipe apaixonada e comprometida, buscamos educar e
          inspirar a sociedade sobre os benefícios vitais da doação, além de
          oferecer suporte e orientação para aqueles que desejam se tornar
          doadores. Acreditamos que cada doação é um gesto de compaixão e
          solidariedade, capaz de transformar vidas e comunidades inteiras.
          Junte-se a nós nessa jornada de esperança e cura, onde cada ato de
          doação de órgãos e sangue é um passo em direção a um futuro mais
          saudável e vibrante para todos.
        </div>
        <div className="title-sm m text-center mt-4 mb-2">Motivação</div>
        <div className="content-text">
          Na busca incessante por uma sociedade mais solidária e saudável, nossa
          motivação reside na convicção de que cada ato de doação de órgãos e
          sangue tem o potencial de transformar vidas e oferecer esperança onde
          ela é mais necessária. Movidos pela crença inabalável no poder do
          altruísmo, procuramos inspirar e educar, incentivando a participação
          ativa na causa da doação para que juntos possamos construir um futuro
          mais promissor e inclusivo para todos.
        </div>
        <Footer />
      </div>
    </>
  );
}
