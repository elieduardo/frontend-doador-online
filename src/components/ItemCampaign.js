import React from "react";
import { Card } from "react-bootstrap";
import photo from "../assets/images/foto.avif";

export default function ItemCampanha() {
  return (
    <div className="col-carousel-donation">
      <Card className="text-center shadow mx-lg-4 mx-md-4 mx-1 my-4">
        <Card.Img className="img-card-campaign" variant="top" src={photo} />
        <Card.Body>
          <div className="bold-card-title">Nome Sobrenome</div>
          <div className="age-card-campaign">Idade</div>
          <div className="blood-type-card-campaign">A +</div>
        </Card.Body>
      </Card>
    </div>
  );
}
