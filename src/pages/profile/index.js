import React, { useRef, useState } from "react";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import defaultImage from "../../assets/images/user.jpg";
import PersonalInformation from "./Tabs/personaInformation";
import AddressInformation from "./Tabs/addressInformation";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleGetProfileData = async () => {};
  const inputFile = useRef(null);
  return (
    <>
      <NavBarComp />
      <div className="d-flex px-5 py-2">
        <Col>
          <Col sm={3} className="text-center">
            <img
              className="img-user-profile"
              alt="profile-image"
              src={defaultImage}
              onClick={() => {
                inputFile.current.click();
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.cursor = "pointer";
              }}
            />
            <input
              type="file"
              id="file"
              ref={inputFile}
              style={{ display: "none" }}
            />
            <div className="bold-card-title mb-4">Eduardo de Ramos Eli</div>
          </Col>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Informações Pessoais</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Dados Residenciais</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Histórico de Doações</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col>
                <Tab.Content className="mt-lg-n10">
                  <Tab.Pane eventKey="first">
                    <PersonalInformation />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <AddressInformation />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </div>
      <Footer />
    </>
  );
}
