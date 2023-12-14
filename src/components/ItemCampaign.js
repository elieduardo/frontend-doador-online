import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import DefaultImage from "../assets/images/default-image.png";

export default function ItemCampaign({ data }) {
  const navigate = useNavigate();
  const { campaignId, doneeName, doneeAge, bloodType, rhFactorType, base64Image } = data;

  return (
    <Card className="text-center shadow mx-lg-4 mx-md-4 mx-1 my-4 pointer" onClick={() => navigate(`/campaigns/${campaignId}`)}>
      <Card.Img className="img-card-campaign" variant="top" src={base64Image ? `data:image/png;base64, ${base64Image}` : DefaultImage} />
      <Card.Body>
        <div className="bold-card-title">{doneeName}</div>
        <div className="age-card-campaign">{doneeAge} anos</div>
        <div className="blood-type-card-campaign">{bloodType}{rhFactorType}</div>
      </Card.Body>
    </Card>
  );
}
