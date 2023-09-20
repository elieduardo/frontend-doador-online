import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import firstImage from "../../assets/images/home-1.png";
import secondImage from "../../assets/images/home-2.png";
import thirdImage from "../../assets/images/home-3.png";

import InfoCards from "../../components/InfoCards";
import InfoDataCards from "../../components/InfoDataCards";
import Campanhas from "../../components/Campaigns";
import Benefits from "../../components/Benefits";

import ItemHospital from "../../components/ItemHospital";

export default function Home() {
  return (
    <div>
      <div className="d-flex p-5">
        <Col>
          <div className="title">Seja um doador</div>
          <div className="content-text-opacity my-4">
            Faça sua parte, e junte-se à nossa missão
          </div>
          <div className="py-3">
            <Button variant="none">MAIS INFORMAÇÕES</Button>
            <Button className="ml-2">JUNTAR-SE</Button>
          </div>
        </Col>
        <img className="img-fluid" src={firstImage} />
      </div>
      <InfoCards />
      <InfoDataCards />
      <div className="d-flex p-5">
        <Col>
          <div className="title">Doação de sangue</div>
          <div className="content-text">
            Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
            sed. Nam sollicitudin dignissim nunc, cursus ullamcorper eros
            vulputate sed. Nam sollicitudin dignissim nunc, cursus ullamcorper
            eros vulputate sed. Nam sollicitudin dignissim nunc, cursus
            ullamcorper eros vulputate sed. Nam sollicitudin dignissim nunc,
            cursus ullamcorper eros vulputate sed. Nam sollicitudin dignissim
            nunc, cursus ullamcorper eros vulputate sed.
          </div>
        </Col>
        <img className="img-fluid-50" src={thirdImage} />
      </div>
      <Row>
        <div className="d-flex p-5">
          <img className="img-fluid-50" src={secondImage} />
          <Col>
            <div className="title">Doação de órgãos</div>
            <div className="content-text">
              Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
              sed. Nam sollicitudin dignissim nunc, cursus ullamcorper eros
              vulputate sed. Nam sollicitudin dignissim nunc, cursus ullamcorper
              eros vulputate sed. Nam sollicitudin dignissim nunc, cursus
              ullamcorper eros vulputate sed. Nam sollicitudin dignissim nunc,
              cursus ullamcorper eros vulputate sed. Nam sollicitudin dignissim
              nunc, cursus ullamcorper eros vulputate sed.
            </div>
          </Col>
        </div>
        <div className="d-flex justify-content-center">
          <Button variant="outline-primary">LER MAIS</Button>
          <Button className="ml-2">JUNTAR-SE</Button>
        </div>
      </Row>
      <Campanhas />
      <Benefits />
      <div className="p-5">
        <div className="title">Hospitais Parceiros</div>
        <div className="text">
          Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
          sed.
        </div>
        <div className="d-flex mt-4 justify-content-around">
          <ItemHospital />
          <ItemHospital />
        </div>
        <div className="d-flex mt-4 justify-content-around">
          <ItemHospital />
          <ItemHospital />
        </div>
      </div>
    </div>
  );
}
