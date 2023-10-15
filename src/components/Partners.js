import React from "react";
import ItemPartner from "./ItemPartner";
import Slider from "react-slick";
import logoNubank from "../assets/images/logo-nubank.png";
import logoMoinhos from "../assets/images/logo-moinhos.png";
import logoMaeDeus from "../assets/images/logo-mae-de-deus.png";
import logoRenner from "../assets/images/logo-renner.png";
import logoGoogle from "../assets/images/logo-goole.png";
import logoGhc from "../assets/images/logo-ghc.png";
import logoBanrisul from "../assets/images/logo-banrisul.png";
import CustomNextCarrouselRows from "./CustomNextCarrouselRows";
import CustomPrevCarrouselRows from "./CustomPrevCarrouselRows";

export default function Partners() {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
      <div className="mb-lg-5 mb-3">
        <div className="title">Empresas Parceiras</div>
        <div className="text">
          Empresas que são parceiras da nossa plataforma
        </div>
      </div>
      <Slider {...settings}>
        <ItemPartner photo={logoNubank} />
        <ItemPartner photo={logoMoinhos} />
        <ItemPartner photo={logoRenner} />
        <ItemPartner photo={logoGhc} />
        <ItemPartner photo={logoGoogle} />
        <ItemPartner photo={logoMaeDeus} />
        <ItemPartner photo={logoBanrisul} />
      </Slider>
    </div>
  );
}
