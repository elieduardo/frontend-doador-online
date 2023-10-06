import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ItemCampanha from "./ItemCampaign";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';

export default function Campaigns() {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="px-lg-6 px-4 pb-lg-6 pb-5">
      <div className="mb-lg-5 mb-3 ">
        <div className="title">Campanhas</div>
        <div className="content-text">
          Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.
        </div>
      </div>
      <ScrollingCarousel>
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
      </ScrollingCarousel>
      <div className="mb-2 my-5 p-4 card-gradient">
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
