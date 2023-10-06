import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as formik from 'formik';
import * as yup from 'yup';
import { toast } from "react-toastify";

export default function SingIn(props) {
    const { Formik } = formik;

    const schema = yup.object().shape({
        email: yup.string().required('É necessário preencher o campo E-mail.'),
        password: yup.string().required('É necessário preencher o campo Senha.')
    });

    return (
        <Formik
            validationSchema={schema}
            onSubmit={() => {
                toast.success("Login realizado com sucesso!",
                    {
                        autoClose: 3000,
                        hideProgressBar: true
                    }
                )
            }}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
                email: '',
                password: ''
            }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Row className="p-6 justify-content-center">
                    <Col lg={5}>
                        <Form noValidate onSubmit={handleSubmit}>
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
                            <div className="pt-3 d-flex justify-content-center">
                                <Button type="submit">Logar</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            )}
        </Formik >
    );
}
