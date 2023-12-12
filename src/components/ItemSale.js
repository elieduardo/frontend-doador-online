import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FaTrashCan } from "react-icons/fa6";
import ConfirmationModal from "./ConfirmationModal";
import { deleteSale, postUsePoints } from "../services/saleServices";
import { toast } from "react-toastify";
import { usePointsContext } from "./usePoints";

export default function ItemSale({
  data
}) {
  const { userPoints, updatePoints } = usePointsContext();

  const [showModalConfirmExcludeItem, setShowModalConfirmExcludeItem] =
    useState(false);
  const [showModalConfirmUsePoints, setShowModalConfirmUsePoints] =
    useState(false);
  const { saleId, name, description, points, base64Logo, isAbleToDelete } = data;

  const handleUsePoints = async () => {
    await postUsePoints(saleId)
      .then(() => {
        toast.success('Resgate realizado com sucesso! Em breve você receberá um e-mail com maiores informações!', {
          autoClose: 3000,
          hideProgressBar: true,
        });
        updatePoints();
      })
      .catch((e) => {
        toast.error(`${e.status} - ${e.messages}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      })
      .finally(() => { });
  }

  const handleDeleteSale = async () => {
    await deleteSale(saleId)
      .then(() => {
        toast.success('Promoção excluída com sucesso', {
          autoClose: 3000,
          hideProgressBar: true,
        });
      })
      .catch((e) => {
        toast.error(`${e.status} - ${e.messages}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      })
      .finally(() => { });
  }
  return (
    <>
      <ConfirmationModal
        show={showModalConfirmExcludeItem}
        message="Confirma a exclusão?"
        onConfirm={async () => {
          await handleDeleteSale(saleId);
          setShowModalConfirmExcludeItem(!showModalConfirmExcludeItem);
        }}
        onCancel={() => {
          setShowModalConfirmExcludeItem(!showModalConfirmExcludeItem);
        }}
      />
      <ConfirmationModal
        show={showModalConfirmUsePoints}
        message="Confirma o uso dos pontos?"
        onConfirm={async () => {
          await handleUsePoints();
          setShowModalConfirmUsePoints(!showModalConfirmUsePoints);
        }}
        onCancel={() => {
          setShowModalConfirmUsePoints(!showModalConfirmUsePoints);
        }}
      />
      <Col lg={4} md={6}>
        <Card className="text-center shadow mx-lg-4 mx-md-4 mx-1 my-4 position-relative">
          {isAbleToDelete && (
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
            className="img-card-sales px-4 pt-4"
            variant="top"
            src={`data:image/jpeg;base64,${base64Logo}`}
          />
          <Card.Body>
            <div className="bold-card-title-lg mb-1">{name}</div>
            <div className="description-card-sales">{description}</div>
            <div className="bold-card-title my-4">{points} pontos</div>
            <Button
              className="mb-2"
              onClick={() => {
                setShowModalConfirmUsePoints(!showModalConfirmExcludeItem);
              }}
              disabled={userPoints < points}
            >
              Usar Pontos
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
