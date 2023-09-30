import React from "react";
import bannerImage from "../assets/images/home-2.png";
import { Button, Col, Row } from "react-bootstrap";

export default function OrgansDonationBanner() {
    return (
        <div className="px-lg-5 px-3 pb-lg-6 pb-5">
            <Row>
                <Col lg={6} md={12} sm={12} className="d-flex justify-content-lg-start justify-content-center">
                    <img className="img-fluid-85 pb-lg-0 pb-5" src={bannerImage} alt="banner-donation" />
                </Col>
                <Col lg={6} md={12} sm={12} className=" px-lg-0 px-4">
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
                <Col className="pt-3 pt-lg-5 px-5 d-flex justify-content-center">
                    <Button variant="outline-primary">LER MAIS</Button>
                    <Button className="ml-2">JUNTAR-SE</Button>
                </Col>
            </Row>
        </div >
    );
}