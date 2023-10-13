import React from "react";
import ItemHospital from "./ItemHospital";
import Slider from "react-slick";
import CustomNextCarrouselRows from "./CustomNextCarrouselRows";
import CustomPrevCarrouselRows from "./CustomPrevCarrouselRows";

export default function Hospitals() {
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
      <div className="mb-lg-5 mb-3">
        <div className="title">Hospitais Parceiros</div>
        <div className="text">
          Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
          sed.
        </div>
      </div>
      <Slider {...settings}>
        <ItemHospital />
        <ItemHospital />
        <ItemHospital />
        <ItemHospital />
      </Slider>
    </div>
  );
}
