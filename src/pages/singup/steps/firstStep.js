import React from "react";
import * as formik from "formik";
import * as yup from "yup";
import { Col, Form, Row, InputGroup, Button } from "react-bootstrap";
import MaskedFormControl from "../../../components/MaskedFormControl";
import { removeMask } from "../../../helpers/Strings";
import { cpf as cpfValidator } from "cpf-cnpj-validator";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

export const validationSchemaFirstStep = yup.object().shape({
  name: yup.string().required("É necessário preencher o campo Nome."),
  cpf: yup
    .string()
    .transform((value) => (value ? removeMask(value) : value))
    .required("É necessário preencher o campo Cpf.")
    .min(11, "O CPF deve ter no mínimo 11 dígitos.")
    .test("valid-cpf", "CPF inválido", (value) => {
      return cpfValidator.isValid(value);
    }),
  gender: yup.string().required("É necessário selecionar o campo Gênero."),
  birthDate: yup
    .string()
    .required("É necessário preencher o campo Data de Nascimento"),
  phoneNumber: yup
    .string()
    .transform((value) => (value ? removeMask(value) : value))
    .required("É necessário preencher o campo Celular.")
    .min(11, "O número de celular deve ter no mínimo 11 dígitos."),
  email: yup.string().required("É necessário preencher o campo E-mail."),
  password: yup
    .string()
    .required("É necessário preencher o campo Senha.")
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/,
      "A senha deve conter no mínimo um caractere maiúsculo, um caractere especial e ter no mínimo 6 caracteres."
    ),
});

export default function FirstStep({ errors, values, handleChange }) {
  const { Formik } = formik;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik initialValues={values}>
      {({ handleSubmit }) => (
        <div className="my-5 px-2 justify-content-center d-flex">
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
                  <MaskedFormControl
                    type="text"
                    placeholder="Cpf"
                    name="cpf"
                    value={values.cpf}
                    onChange={handleChange}
                    isInvalid={!!errors.cpf}
                    mask="999.999.999-99"
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
                  <MaskedFormControl
                    type="text"
                    placeholder="Celular"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    isInvalid={!!errors.phoneNumber}
                    mask="(99) 99999-9999"
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
                  <InputGroup hasValidation>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Senha"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                    <Button onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <FiEyeOff color="black" />
                      ) : (
                        <FiEye color="black" />
                      )}
                    </Button>
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </InputGroup>
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
        </div>
      )}
    </Formik>
  );
}
