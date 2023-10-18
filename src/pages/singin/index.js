import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";

export default function SingIn() {
  const { Formik } = formik;
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required("É necessário preencher o campo E-mail."),
    password: yup.string().required("É necessário preencher o campo Senha."),
  });

  return (
    <div>
      <NavBarComp onlyLogo={true} />
      <Formik
        validationSchema={schema}
        onSubmit={() => {
          setIsLoading(true);
          toast.success("Login realizado com sucesso!", {
            autoClose: 3000,
            hideProgressBar: true,
          });
          setIsLoading(false);
          navigate("/");
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
                <NavLink className="forget-password" to="/recuperar-senha">
                  Esqueceu sua senha?
                </NavLink>
                <div className="pt-3 d-flex justify-content-center">
                  <Button type="submit" disabled={isLoading}>
                    Logar
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
