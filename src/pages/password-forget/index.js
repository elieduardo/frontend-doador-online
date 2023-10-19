import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";

export default function PasswordForget() {
  const { Formik } = formik;
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().required("É necessário preencher o campo E-mail."),
  });

  if (success) {
    return (
      <div>
        <NavBarComp onlyLogo={true} />
        <div className="py-6 mx-3 d-flex justify-content-center align-items-center">
          <div class="alert alert-success" role="alert">
            Em breve você receberá em seu e-mail um link para realizar a
            alteração da senha.
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <NavBarComp onlyLogo={true} />
      <Formik
        validationSchema={schema}
        onSubmit={() => {
          setIsLoading(true);
          toast.success(
            "Solicitação de alteração de senha realizada com sucesso.",
            {
              autoClose: 3000,
              hideProgressBar: true,
            }
          );
          setIsLoading(false);
          setSuccess(true);
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
                <div className="pt-3 d-flex justify-content-center">
                  <Button type="submit" disabled={isLoading}>
                    Prosseguir
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
