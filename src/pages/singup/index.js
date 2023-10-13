import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FormikWizard } from "formik-wizard-form";
import NavBarComp from "../../components/NavBarComp";
import FirstStep, { validationSchemaFirstStep } from "./steps/firstStep";
import SecondStep, { validationSchemaSecondStep } from "./steps/secondStep";
import thirdStep, { validationSchemaThirdStep } from "./steps/thirdStep";
import Footer from "../../components/Footer";

export default function SingUp() {
  return (
    <div>
      <NavBarComp onlyLogo={true} />
      <FormikWizard
        validateOnChange={false}
        initialValues={{
          completeName: "",
          cpf: "",
          bornDate: "",
          email: "",
          password: "",
          postalCode: "",
          street: "",
          bloodType: "",
          bloodFactor: "",
          organsDonator: false,
          bloodDonator: false,
          marrowDonator: false,
          terms: false,
        }}
        onSubmit={(values) => console.log(values)}
        validateOnNext
        activeStepIndex={0}
        steps={[
          {
            component: FirstStep,
            validationSchema: validationSchemaFirstStep,
          },
          {
            component: SecondStep,
            validationSchema: validationSchemaSecondStep,
          },
          {
            component: thirdStep,
            validationSchema: validationSchemaThirdStep,
          },
        ]}
      >
        {({
          renderComponent,
          currentStepIndex,
          handlePrev,
          handleNext,
          isPrevDisabled,
          isLastStep,
        }) => (
          <div className="px-lg-6 px-3 pb-lg-6 pb-5">
            <Row className="steps px-2">
              <Col lg={2} md={4} sm={4} xs={4}>
                <div
                  class={`step-content ${
                    currentStepIndex === 0 ? "step-active" : ""
                  } ${currentStepIndex > 0 ? "step-success" : ""}`}
                >
                  <span class="step-circle">1</span>
                  <span class="step-text">Dados Pessoais</span>
                </div>
              </Col>
              <Col lg={2} md={4} sm={4} xs={4}>
                <div
                  class={`step-content ${
                    currentStepIndex === 1 ? "step-active" : ""
                  } ${currentStepIndex > 1 ? "step-success" : ""}`}
                >
                  <span class="step-circle">2</span>
                  <span class="step-text">Endereço</span>
                </div>
              </Col>
              <Col lg={2} md={4} sm={4} xs={4}>
                <div
                  class={`step-content ${
                    currentStepIndex === 2 ? "step-active" : ""
                  } ${currentStepIndex > 2 ? "step-success" : ""}`}
                >
                  <span class="step-circle">3</span>
                  <span class="step-text">Opções de Doação</span>
                </div>
              </Col>
            </Row>

            {renderComponent()}
            <div className="pt-3 d-flex justify-content-center">
              <Button
                className="me-2 px-4"
                variant="outline-primary"
                disabled={isPrevDisabled}
                type="button"
                onClick={handlePrev}
              >
                Anterior
              </Button>
              <Button className="px-4" type="submit" onClick={handleNext}>
                {isLastStep ? "Cadastrar" : "Próximo"}
              </Button>
            </div>
          </div>
        )}
      </FormikWizard>
      <Footer />
    </div>
  );
}
