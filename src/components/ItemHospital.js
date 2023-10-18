import React from "react";
import { Button, Card } from "react-bootstrap";
import {
  MdOutlinePhoneEnabled,
  MdOutlineMail,
  MdModeOfTravel,
} from "react-icons/md";

export default function ItemHospital({nome, telefone, email, endereco, latitude, longitude}) {
  return (
    <Card className="shadow mx-lg-4 mx-md-4 mx-1 my-4">
      <div className="d-flex flex-column text-center justify-content-center my-4 p-2 card-hospital-height">
        <div className="bold-card-title mb-4">{nome}</div>
        <div className="info-card-text-16">
          <MdOutlinePhoneEnabled /> {telefone}
        </div>
        <div className="info-card-text-16">
          <MdOutlineMail /> {email}
        </div>
        <div className="info-card-text-16">
          <MdModeOfTravel /> {endereco}
        </div>
        <Button className="mx-lg-3 mx-2 mt-4" onClick={()=>{window.open(`https://www.google.com/maps/search/?api=1&query=${longitude},${latitude}`, '_blank');}}>Localização</Button>
      </div>
    </Card>
  );
}
