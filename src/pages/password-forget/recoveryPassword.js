import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function PasswordRecovery() {
  const { Formik } = formik;
  const navigate = useNavigate();
  let { idRecovery } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const schema = yup.object().shape({
    password: yup.string().required("A senha nova deve ser preenchida."),
    passwordConfirmation: yup
      .string()
      .required("A confirmação da senha nova deve ser preenchida.")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais."),
  });

  const handleAlterPassword = async (password) => {
    toast.success(
      "Senha alterada com sucesso.\n Realize o login com a nova senha."
    );
    navigate("/singin");
  };

  return (
    <div>
      <NavBarComp onlyLogo={true} />
      <Formik
        validationSchema={schema}
        onSubmit={() => {
          handleAlterPassword();
        }}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          email: "",
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <div className="p-6 justify-content-center d-flex">
            <Col lg={5}>
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Digite uma nova senha"
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
                    <Form.Label>Confirmação da Senha</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Repita a nova senha"
                      name="passwordConfirmation"
                      value={values.passwordConfirmation}
                      onChange={handleChange}
                      isInvalid={!!errors.passwordConfirmation}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.passwordConfirmation}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <div className="pt-3 d-flex justify-content-center">
                  <Button type="submit" disabled={isLoading}>
                    Alterar senha
                  </Button>
                </div>
              </Form>
            </Col>
          </div>
        )}
      </Formik>
      <Footer />
    </div>
  );
}
