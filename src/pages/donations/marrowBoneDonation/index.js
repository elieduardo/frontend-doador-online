import React, { useEffect } from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import NavBarComp from "../../../components/NavBarComp";
import Footer from "../../../components/Footer";

export default function MarrowBoneDonation() {
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
                        Doação de Medula Óssea
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
                <div className="title-sm text-center mb-2">Doação de Medula Óssea</div>
                <div className="content-text">
                    A doação de medula óssea é um ato de extrema generosidade que pode oferecer uma segunda chance de vida a pacientes com doenças graves do sangue, como leucemias e alguns tipos de linfomas. Este tipo de doação envolve a doação de células-tronco, que podem se regenerar e substituir as células doentes do paciente, proporcionando a oportunidade de recuperação e cura. O processo de doação é geralmente simples e seguro, podendo fazer uma diferença significativa na vida de alguém que luta contra doenças hematológicas.
                </div>
                <div className="title-sm m text-center mt-4 mb-2">Benefícios da Doação</div>
                <div className="content-text">
                    Ser doador de medula óssea não apenas oferece a possibilidade de salvar vidas, mas também pode trazer uma sensação profunda de realização pessoal. A oportunidade de ser um elo vital na jornada de cura de alguém, sem a necessidade de um procedimento cirúrgico invasivo, é gratificante. Além disso, ao se registrar como doador de medula óssea, você se torna parte de uma comunidade dedicada a proporcionar esperança e apoio a pacientes que dependem dessa doação para ter uma chance de recuperação.
                </div>
                <div className="title-sm m text-center mt-4 mb-2">Dúvidas Frequentes</div>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>1. Quem pode doar medula óssea?</Accordion.Header>
                        <Accordion.Body className="fst-italic">
                            Pessoas entre 18 e 55 anos em bom estado de saúde.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. Como é feita a doação de medula óssea?</Accordion.Header>
                        <Accordion.Body className="fst-italic">
                            Geralmente, é um procedimento simples, similar à doação de sangue.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. Qual a importância da compatibilidade na doação de medula óssea?</Accordion.Header>
                        <Accordion.Body className="fst-italic">
                            A compatibilidade entre doador e receptor é crucial para o sucesso do transplante
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>4. Quanto tempo leva para se tornar um doador de medula óssea?</Accordion.Header>
                        <Accordion.Body className="fst-italic">
                            O cadastro como doador leva alguns minutos e pode ser feito online ou em postos de coleta.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>5. Quais são os riscos ao doar medula óssea?</Accordion.Header>
                        <Accordion.Body className="fst-italic">
                            Os riscos são mínimos, podendo haver desconforto temporário após a doação.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Footer />
            </div>
        </>
    );
}