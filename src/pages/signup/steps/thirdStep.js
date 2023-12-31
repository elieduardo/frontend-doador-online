import React, { useEffect } from "react";
import * as formik from "formik";
import * as yup from "yup";
import { Col, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const validationSchemaThirdStep = yup.object().shape({
  bloodType: yup.string().required("É necessário preencher o campo Tipo Sanguíneo."),
  rhFactor: yup.string().required("É necessário preencher o campo Fator Rh."),
  terms: yup
    .bool()
    .required()
    .oneOf(
      [true],
      "É necessário ler e aceitar os termos e condições de uso do site."
    ),
});

export default function ThirdStep({ errors, values, handleChange }) {
  const { Formik } = formik;
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Formik initialValues={values}>
      {({ handleSubmit }) => (
        <div className="my-5 px-2 justify-content-center d-flex">
          <Col lg={5} md={6} sm={12} xs={12}>
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
              <Row className="mb-3">
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    name="terms"
                    label="Aceito os termos e condições de uso do site."
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                    id="validationTerms"
                  />
                  <NavLink className="terms-link" to="/terms-conditions">
                    Termos e condições
                  </NavLink>
                </Form.Group>
              </Row>
            </Form>
          </Col>
        </div>
      )}
    </Formik>
  );
}
