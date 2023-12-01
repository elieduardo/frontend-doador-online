import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import DefaultImage from "../assets/images/default-image.png";

export default function ItemCampanha({ data }) {
  const navigate = useNavigate();
  const { campaignId, doneeName, doneeAge, bloodType, photo } = data;

  return (
    <Card className="text-center shadow mx-lg-4 mx-md-4 mx-1 my-4 pointer" onClick={() => navigate(`/campaigns/${campaignId}`)}>
      <Card.Img className="img-card-campaign" variant="top" src={photo ?? DefaultImage} />
      <Card.Body>
        <div className="bold-card-title">{doneeName}</div>
        <div className="age-card-campaign">{doneeAge} anos</div>
        <div className="blood-type-card-campaign">{bloodType}</div>
      </Card.Body>
    </Card>
  );
}
