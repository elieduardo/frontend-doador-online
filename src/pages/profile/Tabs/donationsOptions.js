import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Col, Form, Row } from "react-bootstrap";
import { putDonationOptions } from "../../../services/userServices";
import { toast } from "react-toastify";

export default function DonationsOptions({ donationOptions }) {
    const [isLoading, setIsLoading] = useState(false);

    const schema = yup.object().shape({
        bloodType: yup.string().required("É necessário preencher o campo Tipo Sanguíneo."),
        rhFactor: yup.string().required("É necessário preencher o campo Fator Rh."),
    });

    const handlePutDonationsOptions = async (values) => {
        setIsLoading(true);

        await putDonationOptions(values)
            .then(() => {
                toast.success('Alteração realizada com sucesso.', {
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
            .finally(() => setIsLoading(false));
    }

    const formik = useFormik({
        initialValues: {
            organsDonator: donationOptions.isOrganDonator,
            bloodDonator: donationOptions.isBloodDonator,
            marrowDonator: donationOptions.isBoneMarrowDonator,
            bloodType: donationOptions.bloodType ?? "",
            rhFactor: donationOptions.rhFactorType ?? "",
        },
        validationSchema: schema,
        onSubmit: async (values) => {
            await handlePutDonationsOptions(values);
        },
        validateOnChange: false,
        validateOnBlur: false,
    });

    const { handleChange, values, errors, handleSubmit } = formik;

    return (
        <div className="mx-lg-5 px-2">
            <div className="title-md mb-4">Informações Pessoais</div>
            <Form noValidate onSubmit={handleSubmit}>
                <Row>
                    <Form.Label>Quero ser:</Form.Label>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            name="organsDonator"
                            type="switch"
                            label="Doador de Órgãos"
                            checked={values.organsDonator}
                            onChange={handleChange}
                            isInvalid={!!errors.organsDonator}
                            feedback={errors.organsDonator}
                            feedbackType="invalid"
                            id="organsDonator"
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            name="marrowDonator"
                            type="switch"
                            label="Doador de Medula"
                            onChange={handleChange}
                            checked={values.marrowDonator}
                            isInvalid={!!errors.marrowDonator}
                            feedback={errors.marrowDonator}
                            feedbackType="invalid"
                            id="marrowDonator"
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            name="bloodDonator"
                            type="switch"
                            label="Doador de Sangue"
                            onChange={handleChange}
                            checked={values.bloodDonator}
                            isInvalid={!!errors.bloodDonator}
                            feedback={errors.bloodDonator}
                            feedbackType="invalid"
                            id="bloodDonator"
                        />
                    </Form.Group>
                    <Form.Control.Feedback type="invalid">
                        {errors.bloodDonator}
                    </Form.Control.Feedback>
                </Row>
                <Row className="mb-3">
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
                </Row>
                <Row className="mb-3">
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
                </Row>
                <div className="pt-3 d-flex justify-content-center">
                    <Button className="px-4" type="submit" disabled={isLoading}>
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
                </div>
            </Form>
        </div>
    );
}