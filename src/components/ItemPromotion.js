import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FaTrashCan } from "react-icons/fa6";
import ConfirmationModal from "./ConfirmationModal";
import ModalDialog from "react-bootstrap/ModalDialog";
export default function ItemPromotion({
  empresa,
  descricao,
  pontos,
  banner,
  podeExcluir,
}) {
  const [showModalConfirmExcludeItem, setShowModalConfirmExcludeItem] =
    useState(false);
  const [showModalConfirmUsePoints, setShowModalConfirmUsePoints] =
    useState(false);

  return (
    <>
      <ConfirmationModal
        show={showModalConfirmExcludeItem}
        message="Confirma a exclusão?"
        onConfirm={() => {
          setShowModalConfirmExcludeItem(!showModalConfirmExcludeItem);
        }}
        onCancel={() => {
          setShowModalConfirmExcludeItem(!showModalConfirmExcludeItem);
        }}
      />
      <ConfirmationModal
        show={showModalConfirmUsePoints}
        message="Confirma o uso dos pontos?"
        onConfirm={() => {
          setShowModalConfirmUsePoints(!showModalConfirmUsePoints);
        }}
        onCancel={() => {
          setShowModalConfirmUsePoints(!showModalConfirmUsePoints);
        }}
      />
      <Col lg={4} md={6}>
        <Card className="text-center shadow mx-lg-4 mx-md-4 mx-1 my-4 position-relative">
          {podeExcluir && (
            <Button
              variant="danger"
              className="position-absolute top-0 end-0 mt-2 me-2"
              onClick={() => {
                setShowModalConfirmExcludeItem(!showModalConfirmExcludeItem);
              }}
            >
              <FaTrashCan color="black" />
            </Button>
          )}
          <Card.Img
            className="img-card-promotion px-4 pt-4"
            variant="top"
            src={banner}
          />
          <Card.Body>
            <div className="bold-card-title-lg mb-1">{empresa}</div>
            <div className="description-card-promotion">{descricao}</div>
            <div className="bold-card-title my-4">{pontos} pontos</div>
            <Button
              className="mb-2"
              onClick={() => {
                setShowModalConfirmUsePoints(!showModalConfirmExcludeItem);
              }}
            >
              Usar Pontos
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
