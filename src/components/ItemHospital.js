import React from "react";
import { Button, Card } from "react-bootstrap";
import {
  MdOutlinePhoneEnabled,
  MdOutlineMail,
  MdModeOfTravel,
} from "react-icons/md";

export default function ItemHospital() {
  return (
    <div className="col-carousel-hospital">
      <Card className="shadow mx-lg-4 mx-md-4 mx-1 my-4">
        <div className="d-flex flex-column text-center justify-content-center my-4 p-2">
          <div className="bold-card-title mb-4">Nome Hospital</div>
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

          <Button className="mx-4 mt-4">Ver localização</Button>
        </div>
      </Card>
    </div>
  );
}
