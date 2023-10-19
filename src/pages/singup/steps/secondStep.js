import React, { useEffect, useState } from "react";
import * as formik from "formik";
import * as yup from "yup";
import { Col, Form, Row } from "react-bootstrap";
import MaskedFormControl from "react-bootstrap-maskedinput";
import { getAddress } from "../../../services/addressServices";
import { toast } from "react-toastify";

export const validationSchemaSecondStep = yup.object().shape({
  zipCode: yup.string().required("É necessário preencher o campo Cep."),
  street: yup.string().required("É necessário preencher o campo Rua."),
  district: yup.string().required("É necessário preencher o campo Bairro."),
  number: yup.string().required("É necessário preencher o campo Número."),
  city: yup.string().required("É necessário preencher o campo Cidade."),
  state: yup.string().required("É necessário preencher o campo Estado."),
});

export default function SecondStep({
  errors,
  values,
  handleChange,
  setFieldValue,
}) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { Formik } = formik;
  const [zipCode, setZipCode] = useState(values.zipCode);
  const [editingDisabled, setEditingDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetAddressByCEP = async ({ target }) => {
    if (!target.value) return;

    setIsLoading(true);
    await getAddress(target.value)
      .then(({ data }) => {
        const { state, city, neighborhood, street } = data;
        setFieldValue("street", street);
        setFieldValue("district", neighborhood);
        setFieldValue("city", city);
        setFieldValue("state", state);
        setEditingDisabled(true);
      })
      .catch(() => {
        setEditingDisabled(false);
        toast.warning(
          "Não foi possível encontrar o CEP. Por favor, informe seu endereço nos campos abaixo."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Formik initialValues={values}>
      {({ handleSubmit }) => (
        <div className="my-5 px-2 justify-content-center d-flex">
          <Col lg={5} md={6} sm={12} xs={12}>
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="validationFormik03">
                  <Form.Label>Cep</Form.Label>
                  <MaskedFormControl
                    type="text"
                    placeholder="Cep"
                    name="zipCode"
                    value={zipCode}
                    onBlur={handleGetAddressByCEP}
                    onChange={(e) => {
                      handleChange(e);
                      setZipCode(e.target.value);
                    }}
                    isInvalid={!!errors.zipCode}
                    mask="11111-111"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.zipCode}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Rua</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={isLoading ? "Carregando ..." : "Rua"}
                    name="street"
                    disabled={editingDisabled}
                    value={values.street}
                    onChange={handleChange}
                    isInvalid={!!errors.street}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.street}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Bairro</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={isLoading ? "Carregando ..." : "Bairro"}
                    name="district"
                    disabled={editingDisabled}
                    value={values.district}
                    onChange={handleChange}
                    isInvalid={!!errors.district}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.district}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Número</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Número"
                    name="number"
                    value={values.number}
                    onChange={handleChange}
                    isInvalid={!!errors.number}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.number}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Complemento</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Complemento"
                    name="complement"
                    value={values.complement}
                    onChange={handleChange}
                    isInvalid={!!errors.complement}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.number}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={isLoading ? "Carregando ..." : "Cidade"}
                    name="city"
                    disabled={editingDisabled}
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Estado</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={isLoading ? "Carregando ..." : "Estado"}
                    name="state"
                    disabled={editingDisabled}
                    value={values.state}
                    onChange={handleChange}
                    isInvalid={!!errors.state}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.state}
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
