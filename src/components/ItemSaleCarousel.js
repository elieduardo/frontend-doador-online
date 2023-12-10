import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import DefaultImage from "../assets/images/default-image.png";

export default function ItemSaleCarousel({ data }) {
    const { name, description, points, base64Logo } = data;

    return (
        <Card className="text-center shadow mx-lg-4 mx-md-4 mx-1 my-4">
            <Card.Img className="img-card-sales px-4 pt-4" variant="top" src={`data:image/jpeg;base64,${base64Logo}` ?? DefaultImage} />
            <Card.Body>
                <div className="bold-card-title">{name}</div>
                <div className="sale-item-carousel my-1 description-scroll">
                    <div className="scrolling-text">{description}</div>
                </div>
                <div className="blood-type-card-campaign">{points} pontos</div>
            </Card.Body>
        </Card>
    );
}
