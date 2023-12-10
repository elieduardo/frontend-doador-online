import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdAddCircleOutline } from "react-icons/md";
import { useFormik } from "formik";
import * as yup from "yup";
import { Alert, Col, Form } from "react-bootstrap";

export default function ModalSale() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const schema = yup.object().shape({
    description: yup
      .string()
      .min(30, "A descrição deve ter no mínimo 30 caracteres.")
      .required("É necessário preencher o campo Descrição."),
    quantityPoints: yup
      .number()
      .typeError("A quantidade de pontos deve ser um número.")
      .positive("A quantidade de pontos deve ser maior que zero.")
      .required("É necessário preencher o campo Quantidade de Pontos."),
  });

  const formik = useFormik({
    initialValues: {
      description: "",
      quantityPoints: 0,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { handleChange, values, errors, handleSubmit } = formik;

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Nova Promoção <MdAddCircleOutline />
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Nova Promoção</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate onSubmit={handleSubmit}>
            <Col className="mb-3">
              <Form.Group as={Col} controlId="validationFormik03">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descrição"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  isInvalid={!!errors.description}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col className="mb-3">
              <Form.Group as={Col} controlId="validationFormik03">
                <Form.Label>Quantidade de Pontos</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Quantidade de Pontos"
                  name="quantityPoints"
                  value={values.quantityPoints}
                  onChange={handleChange}
                  isInvalid={!!errors.quantityPoints}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.quantityPoints}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Alert>
              A pontuação será debitada automaticamente do usário que solicitar
              a troca.
            </Alert>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
