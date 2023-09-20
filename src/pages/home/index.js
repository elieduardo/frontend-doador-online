import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import firstImage from "../../assets/images/home-1.png";
import secondImage from "../../assets/images/home-2.png";
import thirdImage from "../../assets/images/home-3.png";
import {
  MdOutlinePeopleOutline,
  MdCheckCircleOutline,
  MdOutlineMedicalServices,
} from "react-icons/md";

export default function Home() {
  return (
    <div>
      <div className="d-flex p-5">
        <Col>
          <h1>Seja um doador</h1>
          <h4>Faça sua parte, e junte-se à nossa missão</h4>
          <Button>Mais informações</Button>
          <Button>Juntar-se</Button>
        </Col>
        <img className="content-img" src={firstImage} />
      </div>
      <div className="d-flex p-5">
        <Col>
          <h3>Doação de Sangue</h3>
          <h4>Interdum et malesuada fames ac ante…</h4>
        </Col>
        <Col>
          <h3>Doação de Sangue</h3>
          <h4>Interdum et malesuada fames ac ante…</h4>
        </Col>
        <Col>
          <h3>Doação de Sangue</h3>
          <h4>Interdum et malesuada fames ac ante…</h4>
        </Col>
      </div>
      <div className="d-flex p-5">
        <Col>
          <MdOutlinePeopleOutline />
          <h3>+500 vidas</h3>
          <h4>
            Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.{" "}
          </h4>
        </Col>
        <Col>
          <MdOutlineMedicalServices />
          <h3>+100 Hospitais</h3>
          <h4>
            Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.{" "}
          </h4>
        </Col>
        <Col>
          <MdCheckCircleOutline />
          <h3>+200 Órgãos</h3>
          <h4>
            Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.{" "}
          </h4>
        </Col>
      </div>
      <div className="d-flex p-5">
        <img className="content-img" src={secondImage} />
        <Col>
          <h1>Seja um doador</h1>
          <h5>
            Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
            sed. Nam sollicitudin dignissim nunc, cursus ullamcorper eros
            vulputate sed. Nam sollicitudin dignissim nunc, cursus ullamcorper
            eros vulputate sed. Nam sollicitudin dignissim nunc, cursus
            ullamcorper eros vulputate sed. Nam sollicitudin dignissim nunc,
            cursus ullamcorper eros vulputate sed. Nam sollicitudin dignissim
            nunc, cursus ullamcorper eros vulputate sed.
          </h5>
        </Col>
      </div>
      <div className="d-flex p-5">
        <Col>
          <h1>Seja um doador</h1>
          <h5>
            Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
            sed. Nam sollicitudin dignissim nunc, cursus ullamcorper eros
            vulputate sed. Nam sollicitudin dignissim nunc, cursus ullamcorper
            eros vulputate sed. Nam sollicitudin dignissim nunc, cursus
            ullamcorper eros vulputate sed. Nam sollicitudin dignissim nunc,
            cursus ullamcorper eros vulputate sed. Nam sollicitudin dignissim
            nunc, cursus ullamcorper eros vulputate sed.
          </h5>
        </Col>
        <img className="content-img" src={thirdImage} />
      </div>
    </div>
  );
}
