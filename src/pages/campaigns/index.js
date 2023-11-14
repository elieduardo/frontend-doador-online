import React, { useEffect, useState } from "react";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import ItemCampanha from "../../components/ItemCampaign";

import FirstImage from "../../assets/images/foto-1.avif";
import SecondImage from "../../assets/images/foto-2.avif";
import ThirhImage from "../../assets/images/foto-3.avif";
import FourthImage from "../../assets/images/foto-4.avif";
import FifthImage from "../../assets/images/foto-5.avif";
import SixthImage from "../../assets/images/foto-6.avif";
import SeventhImage from "../../assets/images/foto-7.avif";
import { Button, Col, Form, Row } from "react-bootstrap";
import ModalCampaign from "./modalCampaign";
import { isAuthenticated, isPartner } from "../../services/auth";

export default function Campaigns() {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <NavBarComp />
            <div className={`px-5 pt-3`}>
                <Row>
                    <Col sm={12} md={12} lg={6} className="title-sm text-lg-start text-center">Campanhas</Col>
                    <Col sm={12} md={12} lg={6} className="text-lg-end text-center mt-4 mt-lg-0">
                        <ModalCampaign />
                    </Col>
                </Row>
                <div className="pb-3 pb-4 mt-3 border-top" />
            </div>
            <div className="px-5 py-2">
                <Row className="mb-4">
                    <Col lg={7} sm={12} className="mt-lg-0 mt-3">
                        <Form.Control
                            type="search"
                            placeholder="Pesquisar por nome"
                            className="me-2 rounded-pill"
                            aria-label="Pesquisar"
                        />
                    </Col>
                    <Col lg={2} sm={6} className="mt-lg-0 mt-3">
                        <Form.Group as={Col} controlId="validationGender">
                            <Form.Select
                                aria-label="Selecione"
                                name="bloodType"
                                id="bloodType"
                            >
                                <option value="">Tipo Sanguíneo</option>
                                <option value="1">A</option>
                                <option value="2">B</option>
                                <option value="3">AB</option>
                                <option value="4">O</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col lg={2} sm={6} className="mt-lg-0 mt-3">
                        <Form.Group as={Col} controlId="validationGender">
                            <Form.Select
                                aria-label="Selecione"
                                name="rhFactor"
                                id="rhFactor"
                            >
                                <option value="">Fator Rh</option>
                                <option value="1">+</option>
                                <option value="2">-</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col lg={1} sm={12} className="mt-lg-0 mt-3 text-center">
                        <Button
                            type="button"
                            variant="outline-primary"
                        >
                            Filtrar
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} md={4}>
                        <ItemCampanha nome={"Carlos Alberto"} idade={"71"} tipoSanguineo={"A +"} photo={FirstImage} />
                    </Col>
                    <Col lg={3} md={4}>
                        <ItemCampanha nome={"Jose Silveira Castro"} idade={"65"} tipoSanguineo={"B -"} photo={SecondImage} />
                    </Col>
                    <Col lg={3} md={4}>
                        <ItemCampanha nome={"Joana da Silva"} idade={"5"} tipoSanguineo={"O +"} photo={ThirhImage} />
                    </Col>
                    <Col lg={3} md={4}>
                        <ItemCampanha nome={"Maria Carolina"} idade={"89"} tipoSanguineo={"AB +"} photo={FourthImage} />
                    </Col>
                    <Col lg={3} md={4}>
                        <ItemCampanha nome={"Laís Klain"} idade={"24"} tipoSanguineo={"A -"} photo={FifthImage} />
                    </Col>
                    <Col lg={3} md={4}>
                        <ItemCampanha nome={"Rafael Pedroso"} idade={"27"} tipoSanguineo={"AB -"} photo={SixthImage} />
                    </Col>
                    <Col lg={3} md={4}>
                        <ItemCampanha nome={"Laura Iasmin"} idade={"18"} tipoSanguineo={"O -"} photo={SeventhImage} />
                    </Col>
                </Row>
                <div className="pt-5 d-flex justify-content-center">
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                Aguarde
                                <span
                                    class="ms-1 spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            </>
                        ) : (
                            "Ver mais"
                        )}
                    </Button>
                </div>
                <Footer />
            </div></>)
}