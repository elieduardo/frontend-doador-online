import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function ItemCampanha({ nome, idade, tipoSanguineo, photo }) {
  const navigate = useNavigate();

  return (
    <Card className="text-center shadow mx-lg-4 mx-md-4 mx-1 my-4 pointer" onClick={() => navigate("/campaigns/1")}>
      <Card.Img className="img-card-campaign" variant="top" src={photo} />
      <Card.Body>
        <div className="bold-card-title">{nome}</div>
        <div className="age-card-campaign">{idade} anos</div>
        <div className="blood-type-card-campaign">{tipoSanguineo}</div>
      </Card.Body>
    </Card>
  );
}
