import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    MdAddCircleOutline
} from "react-icons/md";
import { useFormik } from "formik";
import * as yup from "yup";
import { Alert, Col, Form } from 'react-bootstrap';
import { isAuthenticated } from '../../services/auth';
import { toast } from 'react-toastify';
import { createCampaign } from '../../services/campaignServices';

export default function ModalCampaign({ handleGetCampaigns }) {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const schema = yup.object().shape({
        name: yup.string().required("É necessário preencher o campo Nome."),
        birthDate: yup.string().required("É necessário preencher o campo Data de Nascimento."),
        donationPlace: yup.string().required("É necessário preencher o campo Hospital."),
        bloodType: yup.string().required("É necessário preencher o campo Tipo Sanguíneo."),
        rhFactor: yup.string().required("É necessário preencher o campo Fator Rh."),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            birthDate: "",
            donationPlace: "",
            image: "",
            bloodType: "",
            rhFactor: ""
        },
        validationSchema: schema,
        onSubmit: (values) => {
            handleCreateCampaign(values);
        },
    });

    const { handleChange, values, errors, handleSubmit } = formik;

    const handleImageChange = (event) => {
        const file = event.currentTarget.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                formik.setFieldValue("image", reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleCreateCampaign = async (values) => {
        setIsLoading(true);
        await createCampaign(values)
            .then(() => {
                toast.success("Campanha criada com sucesso!", {
                    autoClose: 3000,
                    hideProgressBar: true,
                });
                handleGetCampaigns();
                handleClose();
            })
            .catch((e) => {
                toast.error(`${e.status} - ${e.messages}`, {
                    autoClose: 3000,
                    hideProgressBar: true,
                });
            })
            .finally(() => setIsLoading(false));
    }

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
                            <Form.Group as={Col}>
                                <Form.Label>Data de Nascimento</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="birthDate"
                                    name="birthDate"
                                    value={values.birthDate}
                                    onChange={handleChange}
                                    isInvalid={!!errors.birthDate}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.birthDate}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col className="mb-3">
                            <Form.Group as={Col} controlId="validationFormik03">
                                <Form.Label>Imagem</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="image"
                                    onChange={handleImageChange}
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
                                    name="donationPlace"
                                    value={values.donationPlace}
                                    onChange={handleChange}
                                    isInvalid={!!errors.donationPlace}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.donationPlace}
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
                        <Modal.Footer>
                            <Button variant="outline-secondary" disabled={isLoading} onClick={handleClose}>
                                Fechar
                            </Button>
                            <Button variant="primary" type='submit' disabled={isLoading}>
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
                                    "Salvar"
                                )}
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}