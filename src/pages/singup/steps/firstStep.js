import React from "react";
import * as formik from "formik";
import * as yup from "yup";
import { Col, Form, Row } from "react-bootstrap";

export const validationSchemaFirstStep = yup.object().shape({
  completeName: yup.string().required("É necessário preencher o campo Nome."),
  cpf: yup.string().required("É necessário preencher o campo Cpf."),
  bornDate: yup
    .string()
    .required("É necessário preencher o campo Data de Nascimento"),
  email: yup.string().required("É necessário preencher o campo E-mail."),
  password: yup.string().required("É necessário preencher o campo Senha."),
});

export default function FirstStep({ errors, values, handleChange }) {
  const { Formik } = formik;
  return (
    <Formik initialValues={values}>
      {({ handleSubmit }) => (
        <Row className="my-5 px-2 justify-content-center">
          <Col lg={5} md={6} sm={12} xs={12}>
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
                <Form.Group as={Col} controlId="validationFormik03">
                  <Form.Label>Cpf</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Cpf"
                    name="cpf"
                    value={values.cpf}
                    onChange={handleChange}
                    isInvalid={!!errors.cpf}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cpf}
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
            </Form>
          </Col>
        </Row>
      )}
    </Formik>
  );
}
