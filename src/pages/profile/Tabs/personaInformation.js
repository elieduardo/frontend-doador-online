import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import MaskedFormControl from "../../../components/MaskedFormControl";
import { useFormik } from "formik";
import * as yup from "yup";
import { dateStringInputFormatter, removeMask } from "../../../helpers/Strings";
import { toast } from "react-toastify";
import { putPersonalData } from "../../../services/userServices";

export default function PersonalInformation({ personalData }) {
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("É necessário preencher o campo Nome."),
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
  });

  const handlePutPersonalData = async (values) => {
    setIsLoading(true);

    await putPersonalData(values)
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

  const formik = useFormik({
    initialValues: {
      cpf: personalData.cpf ?? "",
      name: personalData.name ?? "",
      gender: personalData.gender ?? "",
      birthDate: personalData.birthDate ? dateStringInputFormatter(personalData.birthDate) : "",
      email: personalData.email ?? "",
      phoneNumber: personalData.phoneNumber ?? ""
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      await handlePutPersonalData(values);
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  const { handleChange, values, errors, handleSubmit } = formik;

  return (
    <div className="mx-lg-5 px-2">
      <div className="title-md mb-4">Informações Pessoais</div>
      <Form noValidate onSubmit={handleSubmit}>
        <Col lg={12} md={12} sm={12} className="mb-3">
          <Form.Group as={Col} controlId="validationFormik03">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome Completo"
              name="name"
              value={values.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
              disabled={isLoading}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Row>
          <Col lg={6} md={6} sm={12} className="mb-3">
            <Form.Group as={Col} controlId="validationFormik03">
              <Form.Label>Cpf</Form.Label>
              <MaskedFormControl
                type="text"
                placeholder="Cpf"
                value={values.cpf}
                disabled
                mask="999.999.999-99"
              />
            </Form.Group>
          </Col>
          <Col lg={3} md={3} sm={12} className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control
                type="date"
                placeholder="birthDate"
                name="birthDate"
                value={values.birthDate}
                onChange={handleChange}
                isInvalid={!!errors.birthDate}
                disabled={isLoading}
              />
              <Form.Control.Feedback type="invalid">
                {errors.birthDate}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col lg={3} md={3} sm={12} className="mb-3">
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
                  disabled={isLoading}
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
          </Col>
        </Row>
        <Row className="mb-3">
          <Col lg={12} md={12} sm={12} className="mb-3">
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
                disabled={isLoading}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phoneNumber}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col lg={12} md={12} sm={12} className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="E-mail"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                disabled
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
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
                  class="ms-1 spinner-border spinner-border-sm"
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
