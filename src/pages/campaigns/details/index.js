import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import NavBarComp from "../../../components/NavBarComp";
import CustomBreadCrumb from "../../../components/CustomBreadCrumb";
import Footer from "../../../components/Footer";
import FirstImage from "../../../assets/images/foto-1.avif"
export default function CampaignDetails() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <>
            <NavBarComp />
            <CustomBreadCrumb title={"Campanha - José Alberto Freitas"} />
            <div className="px-5 py-2">
                <Row>
                    <Col lg={6}>
                        <img className="img-details-campaign" variant="top" src={FirstImage} />
                    </Col>
                    <Col lg={6} md={12} sm={12} className="px-lg-4">
                        <div className="d-flex flex-column h-100 justify-content-between">
                            <div>
                                <div className="title-md mb-1 mt-5 mt-lg-0">José Alberto Freitas</div>
                                <div className="fw-light">62 anos</div>
                                <div className="fw-light">Tipo sanguíneo: A-</div>
                                <div className="fw-light pb-4">Local doação: Hospital Santa Casa</div>
                                <div className="content-text">
                                    A sua ajuda pode salvar a vida de José Alberto Freitas. Faça a sua parte doando e compartilhando esta campanha. Cada contribuição é valiosa e pode fazer a diferença. Juntos, podemos proporcionar esperança e apoio a José e sua família. Seja parte dessa causa e ajude-nos a alcançar nosso objetivo.
                                </div>
                            </div>
                            <Row className="justify-content-center mt-5 mt-lg-0 mx-0 mx-lg-8">
                                <Button type="button" variant="outline-primary">
                                    Compartilhar
                                </Button>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </>)
}