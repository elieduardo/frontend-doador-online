import React, { useState } from "react";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";

import FirstImage from "../../assets/images/logo-renner.png";
import SecondImage from "../../assets/images/logo-nubank.png";
import ThirhImage from "../../assets/images/logo-banrisul.png";
import FourthImage from "../../assets/images/logo-goole.png";
import { Button, Col, Row } from "react-bootstrap";
import ModalPromotion from "./modalPromotion";
import ItemPromotion from "../../components/ItemPromotion";
import { isAuthenticated, isPartner } from "../../services/auth";

export default function Promotions() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <NavBarComp />
      <div className={`px-5 pt-3`}>
        <Row>
          <Col
            sm={12}
            md={12}
            lg={6}
            className="title-sm text-lg-start text-center"
          >
            Promoções
          </Col>
          {(isAuthenticated() && isPartner()) &&
            <Col
              sm={12}
              md={12}
              lg={6}
              className="text-lg-end text-center mt-4 mt-lg-0"
            >
              <ModalPromotion />
            </Col>}
        </Row>
        <div className="pb-3 pb-4 mt-3 border-top" />
      </div>
      <div className="px-5 py-2">
        <Row>
          <ItemPromotion
            empresa={"Renner"}
            descricao={
              "Empresa oferece 10% de desconto em cursos usando 100 pontos."
            }
            pontos={30}
            banner={FirstImage}
            podeExcluir={true}
          />
          <ItemPromotion
            empresa={"Nubank"}
            descricao={
              "Empresa oferece 10% de desconto em cursos usando 100 pontos. Empresa oferece 10% de desconto em cursos usando 100 pontos."
            }
            pontos={15}
            banner={SecondImage}
          />
          <ItemPromotion
            empresa={"Banrisul"}
            descricao={
              "Empresa oferece 10% de desconto em cursos usando 100 pontos."
            }
            pontos={150}
            banner={ThirhImage}
          />
          <ItemPromotion
            empresa={"Google"}
            descricao={
              "Empresa oferece 10% de desconto em cursos usando 100 pontos."
            }
            pontos={100}
            podeExcluir={true}
            banner={FourthImage}
          />{" "}
          <ItemPromotion
            empresa={"Nubank"}
            descricao={
              "Empresa oferece 10% de desconto em cursos usando 100 pontos."
            }
            pontos={40}
            banner={SecondImage}
          />{" "}
          <ItemPromotion
            empresa={"Renner"}
            descricao={
              "Empresa oferece 10% de desconto em cursos usando 100 pontos."
            }
            pontos={20}
            banner={FirstImage}
          />
        </Row>
        <div className="pt-5 d-flex justify-content-center">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                Aguarde
                <span
                  class="ms-1 spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
              </>
            ) : (
              "Ver mais"
            )}
          </Button>
        </div>
        <Footer />
      </div>
    </>
  );
}
