import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdAddCircleOutline } from "react-icons/md";
import { useFormik } from "formik";
import * as yup from "yup";
import { Alert, Col, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { postSale } from "../../services/saleServices";

export default function ModalSale({ handleReload }) {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const schema = yup.object().shape({
    description: yup
      .string()
      .min(30, "A descrição deve ter no mínimo 30 caracteres.")
      .required("É necessário preencher o campo Descrição."),
    points: yup
      .number()
      .typeError("A quantidade de pontos deve ser um número.")
      .positive("A quantidade de pontos deve ser maior que zero.")
      .required("É necessário preencher o campo Quantidade de Pontos."),
  });

  const formik = useFormik({
    initialValues: {
      description: "",
      points: 0,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      handlePostSale(values);
    },
  });

  const { handleChange, values, errors, handleSubmit } = formik;

  const handlePostSale = async (values) => {
    setIsLoading(true);
    await postSale(values)
      .then(() => {
        toast.success('Promoção incluída com sucesso!', {
          autoClose: 3000,
          hideProgressBar: true,
        });
        handleReload();
      })
      .catch((e) => {
        toast.error(`${e.status} - ${e.messages}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      })
      .finally(() => setIsLoading(false), setShow(false));
  }

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
                  disabled={isLoading}
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
                  name="points"
                  disabled={isLoading}
                  value={values.points}
                  onChange={handleChange}
                  isInvalid={!!errors.points}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.points}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Alert>
              A pontuação será debitada automaticamente do usário que solicitar
              o resgate.
            </Alert>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" disabled={isLoading} onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" type='submit' disabled={isLoading}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
