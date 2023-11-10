import React, { useEffect, useState } from "react";
import NavBarComp from "../../components/NavBarComp";
import * as formik from "formik";
import * as yup from "yup";
import Footer from "../../components/Footer";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const { Formik } = formik;

    const schema = yup.object().shape({
        name: yup.string().required("É necessário preencher o campo Nome."),
        email: yup.string().required("É necessário preencher o campo E-mail."),
        message: yup.string().required("É necessário preencher o campo Mensagem."),
    });

    return (
        <>
            <NavBarComp />
            <div className={`px-5 pt-3`}>
                <Row>
                    <Col
                        sm={12}
                        md={12}
                        lg={6}
                        className="title-sm text-lg-start text-center"
                    >
                        Contato
                    </Col>
                    <Col
                        sm={12}
                        md={12}
                        lg={6}
                        className="text-lg-end text-center mt-4 mt-lg-0"
                    ></Col>
                </Row>
                <div className="pb-3 pb-4 mt-3 border-top" />
                <div className="content-text-md text-center">
                    Você pode entrar em contato com a nossa equipe preenchendo o formulário abaixo, ou atráves do email: contato@doadoronline.com.br
                </div>
            </div>
            <Formik
                validationSchema={schema}
                onSubmit={(values) => {

                }}
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{
                    name: "",
                    email: "",
                    message: "",
                }}
            >
                {({ handleSubmit, handleChange, values, errors }) => (
                    <div className="p-6 justify-content-center d-flex">
                        <Col lg={8}>
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>Nome</Form.Label>
                                        <Form.Control
                                            type="name"
                                            placeholder="Nome"
                                            name="name"
                                            disabled={isLoading}
                                            value={values.name}
                                            onChange={handleChange}
                                            isInvalid={!!errors.name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.name}
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
                                            disabled={isLoading}
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
                                        <Form.Label>Mensagem</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="Mensagem"
                                            name="message"
                                            disabled={isLoading}
                                            value={values.message}
                                            onChange={handleChange}
                                            isInvalid={!!errors.message}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.message}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <div className="pt-3 d-flex justify-content-center">
                                    <Button type="submit" disabled={isLoading}>
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
                                            "Enviar Email"
                                        )}
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </div>
                )}
            </Formik>
            <Footer />
        </>
    );
}
