import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import ItemCampanha from "./ItemCampaign";
import Slider from "react-slick";
import CustomPrevCarrouselRows from "./CustomPrevCarrouselRows";
import CustomNextCarrouselRows from "./CustomNextCarrouselRows";
import { useNavigate } from "react-router";
import { getCampaignCarrousel } from "../services/campaignServices";
import { toast } from "react-toastify";

export default function Campaigns() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    handleGetCampaignsData();
  }, [])

  const handleGetCampaignsData = async () => {
    setIsLoading(true);
    await getCampaignCarrousel()
      .then(({ data }) => {
        setData(data);
      })
      .catch((e) => {
        toast.error(`${e.status} - ${e.messages}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      })
      .finally(() => setIsLoading(false));
  }

  const navigate = useNavigate();

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
        {data.map(x =>
        (<ItemCampanha
          data={x} />))}

      </Slider>
      <div className="mb-2 my-5 p-4 card-gradient">
        <Row className="d-flex align-items-center justify-content-between text-center">
          <Col lg={8} md={12} sm={12}>
            <div className="title-white">Quer criar uma campanha?</div>
            <div className="text-white">
              Crie uma camapanha de doação de sangue para alguém que esteja
              precisando.
            </div>
          </Col>
          <Col lg={4} md={12} sm={12} className="py-4 py-lg-0">
            <Button
              className="button-white"
              onClick={() => {
                navigate("campaigns");
              }}
            >
              CRIAR CAMPANHA
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
