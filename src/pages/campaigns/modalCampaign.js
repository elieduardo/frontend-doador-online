import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    MdAddCircleOutline
} from "react-icons/md";
import { useFormik } from "formik";
import * as yup from "yup";
import { Alert, Col, Form, Row } from 'react-bootstrap';
import { isAuthenticated } from '../../services/auth';

export default function ModalCampaign() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const schema = yup.object().shape({
        name: yup.string().required("É necessário preencher o campo Nome."),
        hospital: yup.string().required("É necessário preencher o campo Hospital."),
        bloodType: yup.string().required("É necessário preencher o campo Tipo Sanguíneo."),
        rhFactor: yup.string().required("É necessário preencher o campo Fator Rh."),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            hospital: "",
            image: "",
            bloodType: "",
            rhFactor: ""
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const { handleChange, values, errors, handleSubmit } = formik;

    if (!isAuthenticated()) {
        return (
            <>
                <Button variant="primary" onClick={handleShow}>
                    Nova Campanha <MdAddCircleOutline />
                </Button>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Adicionar Nova Campanha</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Alert>É necessário ter uma conta e estar logado para criar uma campanha.</Alert>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>)
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Nova Campanha <MdAddCircleOutline />
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar Nova Campanha</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate onSubmit={handleSubmit}>
                        <Col className="mb-3">
                            <Form.Group as={Col} controlId="validationFormik03">
                                <Form.Label>Nome Completo</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nome Completo"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col className="mb-3">
                            <Form.Group as={Col} controlId="validationFormik03">
                                <Form.Label>Imagem</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="image"
                                    value={values.image}
                                    onChange={handleChange}
                                    isInvalid={!!errors.image}
                                />
                            </Form.Group>
                        </Col>
                        <Col className="mb-3">
                            <Form.Group as={Col} controlId="validationFormik03">
                                <Form.Label>Hospital</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Hospital"
                                    name="hospital"
                                    value={values.hospital}
                                    onChange={handleChange}
                                    isInvalid={!!errors.hospital}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.hospital}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col className="mb-3">
                            <Form.Group as={Col} controlId="validationBloodType">
                                <Form.Label>Tipo Sanguíneo</Form.Label>
                                <Form.Group as={Col} controlId="validationBloodType">
                                    <Form.Select
                                        aria-label="Selecione"
                                        name="bloodType"
                                        value={values.bloodType}
                                        id="bloodType"
                                        onChange={handleChange}
                                        isInvalid={!!errors.bloodType}
                                    >
                                        <option value="">Selecione</option>
                                        <option value="1">A</option>
                                        <option value="2">B</option>
                                        <option value="3">AB</option>
                                        <option value="4">O</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.bloodType}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Group>
                        </Col>
                        <Col className="mb-3">
                            <Form.Group as={Col} controlId="validationRhFactor">
                                <Form.Label>Fator Rh</Form.Label>
                                <Form.Group as={Col} controlId="validationRhFactor">
                                    <Form.Select
                                        aria-label="Selecione"
                                        name="rhFactor"
                                        value={values.rhFactor}
                                        id="rhFactor"
                                        onChange={handleChange}
                                        isInvalid={!!errors.rhFactor}
                                    >
                                        <option value="">Selecione</option>
                                        <option value="1">+</option>
                                        <option value="2">-</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.rhFactor}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Group>
                        </Col>
                        <Alert>A pontuação será creditada automaticamente, de acordo com o valor regente.</Alert>
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