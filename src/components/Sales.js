import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CustomPrevCarrouselRows from "./CustomPrevCarrouselRows";
import CustomNextCarrouselRows from "./CustomNextCarrouselRows";
import { useNavigate } from "react-router";
import ItemSaleCarousel from "./ItemSaleCarousel";
import { getSalesCarousel } from "../services/saleServices";
import { Button } from "react-bootstrap";

export default function Sales() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        handleGetSalesData();
    }, [])

    const handleGetSalesData = async () => {
        setIsLoading(true);
        await getSalesCarousel()
            .then(({ data }) => {
                setData(data);
            })
            .catch((e) => {
                console.error(`${e.status} - ${e.messages}`);
            })
            .finally(() => setIsLoading(false));
    }

    const navigate = useNavigate();

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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

    if (data.length === 0 || isLoading) {
        return (<></>);
    }

    return (
        <div className="px-lg-6 px-4 pb-lg-6 pb-5">
            <div className="mb-lg-5 mb-3 ">
                <div className="title">Promoções</div>
                <div className="content-text">
                    Conheças as promoções que estão ativas
                </div>
            </div>
            <Slider {...settings}>
                {data.map(x =>
                (<ItemSaleCarousel
                    data={x} />))}
            </Slider>
            <div className="pt-3 d-flex justify-content-center">
                <Button variant="outline-primary" onClick={() => { navigate("sales") }}>
                    Ver mais
                </Button>
            </div>
        </div>
    );
}
