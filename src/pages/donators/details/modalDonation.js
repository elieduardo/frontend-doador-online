import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    MdAddCircleOutline
} from "react-icons/md";
import { useFormik } from "formik";
import * as yup from "yup";
import { Alert, Col, Form } from 'react-bootstrap';
import { postDonation } from '../../../services/userServices';
import { toast } from 'react-toastify';

export default function ModalDonation({ userId, handleReload }) {
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const schema = yup.object().shape({
        donationType: yup.string().required("É necessário selecionar o tipo de doação."),
    });

    const handlePostDonation = async (values) => {
        setIsLoading(true);
        await postDonation(userId, values.donationType)
            .then(() => {
                toast.success('Doação incluída com sucesso!', {
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

    const formik = useFormik({
        initialValues: {
            donationType: ""
        },
        validationSchema: schema,
        onSubmit: async (values) => {
            await handlePostDonation(values);
        },
    });

    const { handleChange, values, errors, handleSubmit } = formik;

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Nova Doação <MdAddCircleOutline />
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar Nova Doação</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate onSubmit={handleSubmit}>
                        <Col className="mb-3">
                            <Form.Group as={Col} controlId="validationFormik03">
                                <Form.Label>Tipo de Doação</Form.Label>
                                <Form.Select
                                    aria-label="Selecione"
                                    name="donationType"
                                    value={values.donationType}
                                    id="donationType"
                                    onChange={handleChange}
                                    isInvalid={!!errors.donationType}
                                    disabled={isLoading}
                                >
                                    <option value="">Selecione</option>
                                    <option value="1">Doação de Sangue</option>
                                    <option value="2">Doação de Medula</option>
                                    <option value="3">Doação de Orgãos</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.donationType}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Alert>A pontuação será creditada automaticamente, de acordo com o valor regente.</Alert>
                        <Modal.Footer>
                            <Button variant="outline-secondary" onClick={handleClose} disabled={isLoading}>
                                Fechar
                            </Button>
                            <Button variant="primary" type='submit' disabled={isLoading}>
                                Salvar
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}