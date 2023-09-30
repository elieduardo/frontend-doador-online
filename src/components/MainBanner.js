import React from "react";
import homeImage from "../assets/images/home-1.png";
import { Button, Col, Row } from "react-bootstrap";

export default function MainBanner() {
    return (
        <div className="p-lg-5 p-3 ">
            <Row>
                <Col lg={6} md={12} sm={12} className="text-center text-lg-start">
                    <div className="title">Seja um doador</div>
                    <div className="content-text-opacity my-4">
                        Faça sua parte, e junte-se à nossa missão
                    </div>
                    <div className="py-3">
                        <Button variant="none">MAIS INFORMAÇÕES</Button>
                        <Button className="ml-2">JUNTAR-SE</Button>
                    </div>
                </Col>
                <Col lg={6} md={12} sm={12} className="d-flex justify-content-center pt-lg-0 pt-4">
                    <img className="img-fluid-85" src={homeImage} alt="Banner"/>
                </Col>
            </Row>
        </div>
    );
}