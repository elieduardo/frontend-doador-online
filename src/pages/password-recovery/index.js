import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { passwordChange } from "../../services/userServices";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function PasswordRecovery() {
  const { Formik } = formik;
  const navigate = useNavigate();
  let { token, email } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object().shape({
    password: yup
      .string()
      .required("A senha nova deve ser preenchida.")
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/,
        "A senha deve conter no mínimo um caractere maiúsculo, um caractere especial e ter no mínimo 6 caracteres."
      ),
    confirmPassword: yup
      .string()
      .required("A confirmação da senha nova deve ser preenchida.")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais."),
  });

  const handleAlterPassword = async ({ password, confirmPassword }) => {
    setIsLoading(true);
    await passwordChange(email, token, password, confirmPassword)
      .then(() => {
        toast.success(
          "Senha alterada com sucesso.\n Realize o login com a nova senha."
        );
        navigate("/signin");
      })
      .catch((e) => {
        toast.error(`${e.status} - ${e.messages}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <NavBarComp onlyLogo={true} />
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          handleAlterPassword(values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <div className="p-6 justify-content-center d-flex">
            <Col lg={5}>
              <Form noValidate onSubmit={handleSubmit}>
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
                    <Form.Label>Senha</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Senha"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPassword}
                      />
                      <Button onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                          <FiEyeOff color="black" />
                        ) : (
                          <FiEye color="black" />
                        )}
                      </Button>
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    </InputGroup>
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
                      "Alterar senha"
                    )}
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
