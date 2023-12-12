import React from "react";
import bannerImage from "../assets/images/home-4.png";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function MarrowDonationBanner() {
    const navigate = useNavigate();

    return (
        <div className="px-lg-6 px-3 pb-lg-6 pb-5">
            <Row>
                <Col lg={6} md={12} sm={12} className=" px-lg-0 px-4">
                    <div className="title pb-4">Doação de Medula Óssea</div>
                    <div className="content-text">
                        Doar medula óssea é um ato de compaixão que se torna um elo vital na rede de cuidados de saúde. Ao se tornar um doador, você fornece uma esperança crucial para aqueles enfrentando doenças graves do sangue, como leucemia. Sua doação é um recurso essencial para pacientes em momentos críticos, possibilitando tratamentos que podem salvar vidas. Cada doador de medula óssea representa uma oportunidade real de cura para alguém em necessidade. Junte-se a nós nessa causa significativa, fazendo parte de uma comunidade comprometida em oferecer esperança e apoio aos que lutam pela recuperação.
                    </div>
                    <Col className="pt-3 pt-lg-5 px-5 d-flex justify-content-center">
                        <Button variant="outline-primary" onClick={() => { navigate("marrow-bone-donation") }}>LER MAIS</Button>
                    </Col>
                </Col>
                <Col
                    lg={6}
                    md={12}
                    sm={12}
                    className="d-flex justify-content-lg-end justify-content-center"
                >
                    <img className="img-fluid-85 p-lg-0 p-4" src={bannerImage} alt="banner" />
                </Col>
            </Row>
        </div>
    );
}
