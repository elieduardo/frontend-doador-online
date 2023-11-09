import React, { useEffect } from "react";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import { Col, Row } from "react-bootstrap";

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
        <div className="title-sm text-center mb-2">Doação de Órgãos</div>
        <div className="content-text">
          A doação de órgãos é um ato de generosidade e compaixão que pode mudar
          o curso da vida de alguém. Ao doar um órgão, um indivíduo não apenas
          oferece a esperança de uma segunda chance, mas também mostra o poder
          transformador do amor e da solidariedade. Nosso compromisso com a
          conscientização e educação sobre a doação de órgãos busca destacar a
          importância desse ato de benevolência, destacando o potencial que cada
          um de nós tem para ser um agente de mudança e esperança na vida de
          outros.
        </div>
        <div className="title-sm m text-center mt-4 mb-2">Importância</div>
        <div className="content-text">
          A doação de órgãos desempenha um papel crucial na vida daqueles que
          aguardam por um transplante e enfrentam desafios de saúde
          significativos. Com a escassez de órgãos doados em relação à demanda,
          é imperativo compreender a importância desse gesto de solidariedade e
          empatia. Ao doar um órgão, não apenas oferecemos uma nova oportunidade
          de vida a um receptor, mas também demonstramos o poder de uma
          comunidade unida em prol do bem-estar e da compaixão. Acreditamos que
          ao promover a conscientização sobre a importância da doação de órgãos,
          podemos fortalecer laços e construir uma sociedade mais saudável e
          inclusiva para todos.
        </div>
        <Footer />
      </div>
    </>
  );
}
