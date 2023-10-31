import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Col, Form, Row } from "react-bootstrap";

export default function DonationsOptions() {
    const [isLoading, setIsLoading] = useState(false);

    const schema = yup.object().shape({
        bloodType: yup.string().when("bloodDonator", {
            is: true,
            then(schema) {
                return schema.required("É necessário preencher o campo Tipo Sanguíneo.");
            },
        }),
        rhFactor: yup.string().when("bloodDonator", {
            is: true,
            then(schema) {
                return schema.required("É necessário preencher o campo Fator Rh.");
            },
        })
    });

    const formik = useFormik({
        initialValues: {
            organsDonator: false,
            bloodDonator: false,
            marrowDonator: false,
            bloodType: "",
            rhFactor: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
        },
        validateOnChange: false,
        validateOnBlur: false,
    });

    const { handleChange, values, errors, handleSubmit } = formik;

    return (
        <div className="mx-5">
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
                            name="bloodDonator"
                            type="switch"
                            label="Doador de Sangue"
                            onChange={handleChange}
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
                {values.bloodDonator && (
                    <>
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
                    </>
                )}
                <Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            name="marrowDonator"
                            type="switch"
                            label="Doador de Medula"
                            onChange={handleChange}
                            isInvalid={!!errors.marrowDonator}
                            feedback={errors.marrowDonator}
                            feedbackType="invalid"
                            id="marrowDonator"
                        />
                    </Form.Group>
                </Row>
            </Form>
        </div>
    );
}