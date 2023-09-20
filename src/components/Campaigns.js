import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import ItemCampanha from "./ItemCampaign";

export default function Campanhas() {
  return (
    <div className="p-5">
      <div className="title">Campanhas</div>
      <div className="content-text">
        Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.
      </div>
      <div className="d-flex mt-4 justify-content-around">
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
      </div>
      <div className="d-flex mt-4 justify-content-around">
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
        <ItemCampanha />
      </div>
      <div className="mx-2 my-5 p-4 card-gradient">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <div className="title-white">Quer criar uma campanha?</div>
            <div className="text-white">
              Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
            </div>
          </div>
          <div>
            <Button className="button-white">CRIAR CAMPANHA</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
