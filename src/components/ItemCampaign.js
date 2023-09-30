import React from "react";
import { Card } from "react-bootstrap";
import photo from "../assets/images/foto.avif";

export default function ItemCampanha() {
  return (
    <Card className="text-center shadow m-4 prevent-select">
      <Card.Img className="img-card-campaign" variant="top" src={photo} />
      <Card.Body>
        <div className="bold-card-title">Nome Sobrenome</div>
        <div className="age-card-campaign">Idade</div>
        <div className="blood-type-card-campaign">A +</div>
      </Card.Body>
    </Card>
  );
}
