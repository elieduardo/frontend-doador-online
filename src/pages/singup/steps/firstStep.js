import React from "react";
import * as formik from "formik";
import * as yup from "yup";
import { Col, Form, Row } from "react-bootstrap";

export const validationSchemaFirstStep = yup.object().shape({
  name: yup.string().required("É necessário preencher o campo Nome."),
  cpf: yup.string().required("É necessário preencher o campo Cpf."),
  gender: yup.string().required("É necessário selecionar o campo Gênero."),
  birthDate: yup
    .string()
    .required("É necessário preencher o campo Data de Nascimento"),
  phoneNumber: yup.string().required("É necessário preencher o campo Celular."),
  email: yup.string().required("É necessário preencher o campo E-mail."),
  password: yup.string().required("É necessário preencher o campo Senha."),
});

export default function FirstStep({ errors, values, handleChange }, isLoading) {
  const { Formik } = formik;
  console.log(isLoading)
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
                    name="name"
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
                <Form.Group as={Col} controlId="validationGender">
                  <Form.Label>Gênero</Form.Label>
                  <Form.Group as={Col} controlId="validationGender">
                    <Form.Select
                      aria-label="Selecione"
                      name="gender"
                      value={values.gender}
                      id="gender"
                      onChange={handleChange}
                      isInvalid={!!errors.gender}
                    >
                      <option value="">Selecione</option>
                      <option value="1">Maculino</option>
                      <option value="2">Feminino</option>
                      <option value="3">Não informar</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.gender}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Celular</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Celular"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    isInvalid={!!errors.phoneNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phoneNumber}
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
              </Row>
            </Form>
          </Col>
        </Row>
      )}
    </Formik>
  );
}
