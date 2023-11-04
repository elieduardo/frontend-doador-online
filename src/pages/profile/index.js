import React, { useRef, useState } from "react";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import PersonalInformation from "./Tabs/personaInformation";
import AddressInformation from "./Tabs/addressInformation";
import UserProfileImage from "../../components/UserProfileImage";
import CustomBreadCrumb from "../../components/CustomBreadCrumb";
import DonationsOptions from "./Tabs/donationsOptions";
import HistoryDonations from "./Tabs/historyDonations";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleGetProfileData = async () => { };
  const inputFile = useRef(null);
  return (
    <>
      <NavBarComp />
      <CustomBreadCrumb title={"Minha Conta"} />
      <div className="d-flex px-5 py-2">
        <Col>
          <Col sm={3} className="text-center">
            <UserProfileImage />
            <div className="bold-card-title mb-4 mt-2">Eduardo de Ramos Eli</div>
          </Col>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column mb-4">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Informações Pessoais</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Dados Residenciais</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Opções de Doações</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Histórico de Doações</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col>
                <Tab.Content className="mt-lg-n13">
                  <Tab.Pane eventKey="first">
                    <PersonalInformation />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <AddressInformation />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <DonationsOptions />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <HistoryDonations />
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
