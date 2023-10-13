import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ItemCampanha from "./ItemCampaign";
import Slider from "react-slick";
import CustomPrevCarrouselRows from "./CustomPrevCarrouselRows";
import CustomNextCarrouselRows from "./CustomNextCarrouselRows";

export default function Campaigns() {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <CustomNextCarrouselRows />,
    prevArrow: <CustomPrevCarrouselRows />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-lg-6 px-4 pb-lg-6 pb-5">
      <div className="mb-lg-5 mb-3 ">
        <div className="title">Campanhas</div>
        <div className="content-text">
          Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
          sed.
        </div>
      </div>
      <Slider {...settings}>
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
      </Slider>
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
