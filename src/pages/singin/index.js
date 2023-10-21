import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
import { postAuthentication } from "../../services/auth";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function SingIn() {
  const { Formik } = formik;
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required("É necessário preencher o campo E-mail."),
    password: yup.string().required("É necessário preencher o campo Senha."),
  });

  const handleSingIn = async (values) => {
    setIsLoading(true);
    await postAuthentication(values)
      .then(() => {
        toast.success("Login realizado com sucesso!", {
          autoClose: 3000,
          hideProgressBar: true,
        });
        navigate("/");
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
          handleSingIn(values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <div className="p-6 justify-content-center d-flex">
            <Col lg={5}>
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="E-mail"
                      name="email"
                      disabled={isLoading}
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
                <NavLink className="forget-password" to="/password-forget">
                  Esqueceu sua senha?
                </NavLink>
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
                      "Logar"
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
