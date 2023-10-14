import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ItemCampanha from "./ItemCampaign";
import Slider from "react-slick";
import CustomPrevCarrouselRows from "./CustomPrevCarrouselRows";
import CustomNextCarrouselRows from "./CustomNextCarrouselRows";
import FirstImage from "../assets/images/foto-1.avif";
import SecondImage from "../assets/images/foto-2.avif";
import ThirhImage from "../assets/images/foto-3.avif";
import FourthImage from "../assets/images/foto-4.avif";
import FifthImage from "../assets/images/foto-5.avif";
import SixthImage from "../assets/images/foto-6.avif";
import SeventhImage from "../assets/images/foto-7.avif";

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
        breakpoint: 840,
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
          Conheça as campanhas de doação de sangue
        </div>
      </div>
      <Slider {...settings}>
        <ItemCampanha nome={"Carlos Alberto"} idade={"71"} tipoSanguineo={"A +"} photo={FirstImage}/>
        <ItemCampanha nome={"Jose Silveira Castro"} idade={"65"} tipoSanguineo={"B -"} photo={SecondImage}/>
        <ItemCampanha nome={"Joana da Silva"} idade={"5"} tipoSanguineo={"O +"} photo={ThirhImage}/>
        <ItemCampanha  nome={"Maria Carolina"} idade={"89"} tipoSanguineo={"AB +"} photo={FourthImage}/>
        <ItemCampanha  nome={"Laís Klain"} idade={"24"} tipoSanguineo={"A -"} photo={FifthImage}/>
        <ItemCampanha  nome={"Rafael Pedroso"} idade={"27"} tipoSanguineo={"AB -"} photo={SixthImage}/>
        <ItemCampanha  nome={"Laura Iasmin"} idade={"18"} tipoSanguineo={"O ."} photo={SeventhImage}/>
        
      </Slider>
      <div className="mb-2 my-5 p-4 card-gradient">
        <Row className="d-flex align-items-center justify-content-between text-center">
          <Col lg={8} md={12} sm={12}>
            <div className="title-white">Quer criar uma campanha?</div>
            <div className="text-white">
              Crie uma camapanha de doação de sangue para alguém que esteja precisando.
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
