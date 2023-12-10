import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import MaskedFormControl from "../../../components/MaskedFormControl";
import { useFormik } from "formik";
import * as yup from "yup";
import { removeMask } from "../../../helpers/Strings";
import { getAddress } from "../../../services/addressServices";
import { toast } from "react-toastify";
import { putAddress } from "../../../services/userServices";

export default function AddressInformation({ addresses }) {
  const [zipCode, setZipCode] = useState("");
  const [editingDisabled, setEditingDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object().shape({
    zipCode: yup
      .string()
      .transform((value) => (value ? removeMask(value) : value))
      .required("É necessário preencher o campo Cep.")
      .min(8, "O CEP deve ter no mínimo 8 dígitos."),
    street: yup.string().required("É necessário preencher o campo Rua."),
    district: yup.string().required("É necessário preencher o campo Bairro."),
    number: yup.string().required("É necessário preencher o campo Número."),
    city: yup.string().required("É necessário preencher o campo Cidade."),
    state: yup.string().required("É necessário preencher o campo Estado."),
  });

  const formik = useFormik({
    initialValues: {
      zipCode: addresses[0].zipCode ?? "",
      street: addresses[0].street ?? "",
      district: addresses[0].district ?? "",
      number: addresses[0].number ?? "",
      complement: addresses[0].addressLine2 ?? "",
      city: addresses[0].city ?? "",
      state: addresses[0].state ?? "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      await handlePutAddress(values);
    },
    validateOnChange: false
  });

  useEffect(() => {
    setZipCode(addresses[0].zipCode);
  }, [addresses]);

  const { handleChange, values, errors, setFieldValue, handleSubmit } = formik;

  const handleGetAddressByCEP = async ({ target }) => {
    if (!target.value) return;

    setIsLoading(true);
    await getAddress(target.value)
      .then(({ data }) => {
        const { state, city, addressline2, neighborhood, street } = data;
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

  const handlePutAddress = async (values) => {
    setIsLoading(true);

    await putAddress(values)
      .then(() => {
        toast.success('Alteração realizada com sucesso.', {
          autoClose: 3000,
          hideProgressBar: true,
        });
      })
      .catch((e) => {
        toast.error(`${e.status} - ${e.messages}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="mx-lg-5 px-2">
      <div className="title-md mb-4">Dados Residenciais</div>
      <Form noValidate onSubmit={handleSubmit}>
        <Col lg={3} md={3} sm={12} className="mb-3">
          <Form.Group as={Col} controlId="validationFormik03">
            <Form.Label>Cep</Form.Label>
            <MaskedFormControl
              type="text"
              placeholder="Cep"
              name="zipCode"
              value={zipCode}
              disabled={isLoading}
              onBlur={handleGetAddressByCEP}
              onChange={(e) => {
                handleChange(e);
                setZipCode(e.target.value);
              }}
              isInvalid={!!errors.zipCode}
              mask="99999-999"
            />
            <Form.Control.Feedback type="invalid">
              {errors.zipCode}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Row>
          <Col lg={7} md={12} sm={12} className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Rua</Form.Label>
              <Form.Control
                type="text"
                placeholder={isLoading ? "Carregando ..." : "Rua"}
                name="street"
                disabled={isLoading || editingDisabled}
                value={values.street}
                onChange={handleChange}
                isInvalid={!!errors.street}
              />
              <Form.Control.Feedback type="invalid">
                {errors.street}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col lg={5} md={12} sm={12} className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                type="text"
                placeholder={isLoading ? "Carregando ..." : "Bairro"}
                name="district"
                disabled={isLoading || editingDisabled}
                value={values.district}
                onChange={handleChange}
                isInvalid={!!errors.district}
              />
              <Form.Control.Feedback type="invalid">
                {errors.district}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={12} sm={12} className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Número</Form.Label>
              <Form.Control
                type="text"
                placeholder="Número"
                name="number"
                value={values.number}
                disabled={isLoading}
                onChange={handleChange}
                isInvalid={!!errors.number}
              />
              <Form.Control.Feedback type="invalid">
                {errors.number}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col lg={9} md={12} sm={12} className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Complemento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Complemento"
                name="complement"
                value={values.complement}
                onChange={handleChange}
                isInvalid={!!errors.complement}
                disabled={isLoading}
              />
              <Form.Control.Feedback type="invalid">
                {errors.number}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={12} sm={12} className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="text"
                placeholder={isLoading ? "Carregando ..." : "Cidade"}
                name="city"
                disabled={isLoading || editingDisabled}
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col lg={6} md={12} sm={12} className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                placeholder={isLoading ? "Carregando ..." : "Estado"}
                name="state"
                disabled={isLoading || editingDisabled}
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <div className="pt-3 d-flex justify-content-center">
          <Button className="px-4" type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                Aguarde
                <span
                  className="ms-1 spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
              </>
            ) : (
              "Salvar"
            )}
          </Button>
        </div>
      </Form>
    </div>
  );
}
