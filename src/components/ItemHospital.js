import React from "react";
import { Card } from "react-bootstrap";
import {
  MdOutlinePhoneEnabled,
  MdOutlineMail,
  MdModeOfTravel,
} from "react-icons/md";

import photo from "../assets/images/hospital.png";

export default function ItemHospital() {
  return (
    <Card className="shadow mx-2 col-6">
      <div className="d-flex ">
        <Card.Img className="img-card-hospital m-4" src={photo} />
        <div className="d-flex flex-column justify-content-center">
          <div className="bold-card-title">Nome Hospital</div>
          <div>
            <MdOutlinePhoneEnabled /> (51) 99999.8888
          </div>
          <div>
            <MdOutlineMail /> hospital@email.com.br
          </div>
          <div>
            <MdModeOfTravel /> Rua Hospital da Cidadde, 459, centro, Porto
            Alegre - RS
          </div>
        </div>
      </div>
    </Card>
  );
}
