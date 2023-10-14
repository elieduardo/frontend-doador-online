import React from "react";
import { Card } from "react-bootstrap";

export default function ItemCampanha({nome, idade, tipoSanguineo, photo}) {
  return (
    <Card className="item-campanha text-center shadow mx-lg-4 mx-md-4 mx-1 my-4">
      <Card.Img className="img-card-campaign" variant="top" src={photo} />
      <Card.Body>
        <div className="bold-card-title">{nome}</div>
        <div className="age-card-campaign">{idade}</div>
        <div className="blood-type-card-campaign">{tipoSanguineo}</div>
      </Card.Body>
    </Card>
  );
}
