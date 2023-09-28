import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import ItemCampanha from "./ItemCampaign";

export default function Campanhas() {
  return (
    <div className="p-5">
      <div className="title">Campanhas</div>
      <div className="content-text">
        Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.
      </div>
      <div className="d-flex mt-4 justify-content-around">
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
      </div>
      <div className="d-flex mt-4 justify-content-around">
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
      </div>
      <div className="mx-2 my-5 p-4 card-gradient">
        <Row className="d-flex align-items-center justify-content-between text-center">
          <Col lg={8} md={12} sm={12}>
            <div className="title-white">Quer criar uma campanha?</div>
            <div className="text-white">
              Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
            </div>
          </Col>
          <Col lg={4} md={12} sm={12} className="py-4 py-lg-0">
            <Button className="button-white">CRIAR CAMPANHA</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
