import React, { useEffect } from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import NavBarComp from "../../../components/NavBarComp";
import Footer from "../../../components/Footer";

export default function BloodDonation() {
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
                        Doação de Sangue
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
                <div className="title-sm text-center mb-2">Doação de Sangue</div>
                <div className="content-text">
                    A doação de sangue é um ato fundamental para salvar vidas. Cada doação pode impactar positivamente a saúde e a sobrevivência de até três pessoas. Doar sangue é simples, rápido e seguro. Com apenas alguns minutos do seu tempo, você pode fornecer um recurso essencial para pacientes em situações críticas, como acidentes graves, cirurgias complexas e tratamentos contra o câncer.
                </div>
                <div className="title-sm m text-center mt-4 mb-2">Benefícios da Doação</div>
                <div className="content-text">
                    Ser um doador de sangue não apenas salva vidas, mas também pode beneficiar sua própria saúde. Além de contribuir para a comunidade, a doação de sangue ajuda na renovação das células sanguíneas, o que pode estimular a produção de células frescas e saudáveis no seu corpo.
                </div>
                <div className="title-sm m text-center mt-4 mb-2">Dúvidas Frequentes</div>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>1. Quem pode doar sangue?</Accordion.Header>
                        <Accordion.Body className="fst-italic">
                            Qualquer pessoa saudável, com peso adequado e idade entre 16 e 69 anos.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. Quantas vezes posso doar sangue?</Accordion.Header>
                        <Accordion.Body className="fst-italic">
                            Em geral, homens podem doar a cada 2 meses e mulheres a cada 3 meses.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. Quanto tempo leva o processo de doação?</Accordion.Header>
                        <Accordion.Body className="fst-italic">
                            Em média, de 10 a 15 minutos para a coleta de sangue.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>4. Há algum risco ao doar sangue?</Accordion.Header>
                        <Accordion.Body className="fst-italic">
                            A doação de sangue é um procedimento seguro, com riscos mínimos.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>5. Posso contrair alguma doença ao doar sangue?</Accordion.Header>
                        <Accordion.Body className="fst-italic">
                            Não. Todos os equipamentos utilizados são esterilizados e de uso único, garantindo segurança.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Footer />
            </div>
        </>
    );
}