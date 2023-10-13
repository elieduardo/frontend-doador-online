import React from "react";
import * as formik from "formik";
import * as yup from "yup";
import { Col, Form, Row } from "react-bootstrap";

export const validationSchemaSecondStep = yup.object().shape({
  postalCode: yup
    .string()
    .required("É necessário preencher o campo Cep."),
  street: yup
    .string()
    .required("É necessário preencher o campo Rua"),
});

export default function SecondStep({ errors, values, handleChange }) {
  const { Formik } = formik;
  return (
    <Formik initialValues={values}>
      {({ handleSubmit }) => (
        <Row className="my-5 px-2 justify-content-center">
          <Col lg={5} md={6} sm={12} xs={12}>
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="validationFormik03">
                  <Form.Label>Cep</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nome Completo"
                    name="postalCode"
                    value={values.postalCode}
                    onChange={handleChange}
                    isInvalid={!!errors.postalCode}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.postalCode}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Rua</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Rua"
                    name="street"
                    value={values.street}
                    onChange={handleChange}
                    isInvalid={!!errors.street}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.street}
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
