import React from "react";
import bannerImage from "../assets/images/home-3.png";
import { Col, Row } from "react-bootstrap";


export default function DonationBanner() {
    return (
        <div className="px-lg-5 px-3 pb-lg-6 pb-5">
            <Row>
                <Col lg={6} md={12} sm={12} className=" px-lg-0 px-4">
                    <div className="title pb-4">Doação de sangue</div>
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
                <Col lg={6} md={12} sm={12} className="d-flex justify-content-lg-end justify-content-center">
                    <img className="img-fluid-85" src={bannerImage} />
                </Col>
            </Row>
        </div>
    );
}