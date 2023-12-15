import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function ConfirmationModal({
  show,
  message,
  onConfirm,
  onCancel,
  isLoading
}) {
  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmação</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onCancel} disabled={isLoading}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={onConfirm} disabled={isLoading}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
