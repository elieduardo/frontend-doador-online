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
        breakpoint: 2048,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
        <div className="title">Hospitais Parceiros</div>
        <div className="text">
          Hospitais que estão cadastrados na nossa plataforma
        </div>
      </div>
      <Slider {...settings}>
        <ItemHospital nome={"Moinhos de Vento"} telefone={"(51) 3314-3434"} email={"ouvidoria@hmv.org.br"} endereco={"R. Ramiro Barcelos, 910 - Moinhos de Vento, Porto Alegre - RS"} longitude={-30.0252744} latitude={-51.2083324}/>
        <ItemHospital nome={"Santa Casa de Misericórdia"} telefone={"(51) 3214-8000"} email={"ouvidoria@santacasa.tche.br"} endereco={"Av. Independência, 155 - Independência, Porto Alegre - RS"} longitude={-30.0297222} latitude={-51.2213326}/>
        <ItemHospital nome={"Divina Providência"} telefone={"(51) 3320-6000"} email={"ouvidoria.hdp@divinaprovidencia.org.br"} endereco={"R. da Gruta, 145 - Glória, Porto Alegre - RS"} longitude={-30.0848921} latitude={-51.1886994}/>
        <ItemHospital nome={"São Vicente de Paulo"} telefone={"(54) 3316-4000"} email={"ouvidoria@hsvp.com.b"} endereco={"R. Teixeira Soares, 808 - Centro, Passo Fundo - RS"} longitude={-28.2603441} latitude={-52.4135826}/>        
      </Slider>
    </div>
  );
}
