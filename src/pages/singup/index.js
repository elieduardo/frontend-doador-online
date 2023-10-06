import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as formik from 'formik';
import * as yup from 'yup';
import { toast } from "react-toastify";

export default function SingUp() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        completeName: yup.string().required('É necessário preencher o campo Nome.'),
        bornDate: yup.string().required('É necessário preencher o campo Data de Nascimento'),
        email: yup.string().required('É necessário preencher o campo E-mail.'),
        password: yup.string().required('É necessário preencher o campo Senha.'),
        terms: yup.bool().required().oneOf([true], 'É necessário ler e aceitar os termos e condições de uso do site.'),
    });

    return (
        <Formik
            validationSchema={schema}
            onSubmit={() => {
                toast.success("Cadastro realizado com sucesso!",
                    {
                        autoClose: 3000,
                        hideProgressBar: true
                    }
                )
            }}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
                completeName: '',
                bornDate: '',
                email: '',
                password: '',
                terms: false,
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Row className="p-6 justify-content-center">
                    <Col lg={5}>
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationFormik03">
                                    <Form.Label>Nome Completo</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nome Completo"
                                        name="completeName"
                                        value={values.completeName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.completeName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.completeName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="E-mail"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Senha"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Data de Nascimento</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="bornDate"
                                        name="bornDate"
                                        value={values.bornDate}
                                        onChange={handleChange}
                                        isInvalid={!!errors.bornDate}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.bornDate}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    name="terms"
                                    label="Aceito os termos e condições de uso do site."
                                    onChange={handleChange}
                                    isInvalid={!!errors.terms}
                                    feedback={errors.terms}
                                    feedbackType="invalid"
                                    id="validationFormik0"
                                />
                            </Form.Group>
                            <div className="pt-3 d-flex justify-content-center">
                                <Button type="submit">Cadastrar</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            )}
        </Formik >
    );
}
