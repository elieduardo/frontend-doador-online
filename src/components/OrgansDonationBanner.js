import React from "react";
import bannerImage from "../assets/images/home-2.png";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function OrgansDonationBanner() {
    return (
        <Container className="py-5">
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <img className="img-fluid-85 pb-lg-0 pb-5" src={bannerImage} alt="banner-image" />
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <div className="title pb-4">Doação de órgãos</div>
                    <div className="content-text">
                        Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
                        sed. Nam sollicitudin dignissim nunc, cursus ullamcorper eros
                        vulputate sed. Nam sollicitudin dignissim nunc, cursus ullamcorper
                        eros vulputate sed. Nam sollicitudin dignissim nunc, cursus
                        ullamcorper eros vulputate sed. Nam sollicitudin dignissim nunc,
                        cursus ullamcorper eros vulputate sed. Nam sollicitudin dignissim
                        nunc, cursus ullamcorper eros vulputate sed.
                    </div>
                </Col>
                <Col className="py-5 d-flex justify-content-center">
                    <Button variant="outline-primary">LER MAIS</Button>
                    <Button className="ml-2">JUNTAR-SE</Button>
                </Col>
            </Row>
        </Container >
    );
}