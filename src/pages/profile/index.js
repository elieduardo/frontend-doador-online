import React, { useEffect, useRef, useState } from "react";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import PersonalInformation from "./Tabs/personaInformation";
import AddressInformation from "./Tabs/addressInformation";
import UserProfileImage from "../../components/UserProfileImage";
import CustomBreadCrumb from "../../components/CustomBreadCrumb";
import DonationsOptions from "./Tabs/donationsOptions";
import HistoryDonations from "./Tabs/historyDonations";
import { getUser } from "../../services/userServices";
import { toast } from "react-toastify";
import { roleIsEqual } from "../../services/auth";
import { Roles } from "../../helpers/Constant";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    handleGetProfileData();
  }, []);

  const handleGetProfileData = async () => {
    setIsLoading(true);

    await getUser()
      .then(({ data }) => {
        setData(data);
      })
      .catch((e) => {
        toast.error(`${e.status} - ${e.messages}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      })
      .finally(() => setIsLoading(false));
  }

  const inputFile = useRef(null);
  return (
    <>
      <NavBarComp />
      <CustomBreadCrumb title={"Minha Conta"} />
      <div className="px-5 py-2">
        <Col>
          <Col sm={3} className="text-center">
            <UserProfileImage />
            <div className="bold-card-title mb-4 mt-2">Eduardo de Ramos Eli</div>
          </Col>
          <Tab.Container id="left-tabs" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column mb-4">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Informações Pessoais</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Dados Residenciais</Nav.Link>
                  </Nav.Item>
                  {roleIsEqual(Roles.Donator) &&
                    <>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Opções de Doações</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Histórico de Doações</Nav.Link>
                      </Nav.Item>
                    </>
                  }
                </Nav>
              </Col>
              {(isLoading || data.length === 0)
                ?
                <Col>
                  <Tab.Content className="mt-lg-n13">
                    <Row className="justify-content-center align-items-center my-7">
                      <Col className="text-center">
                        Aguarde
                        <span className="ms-1 spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                      </Col>
                    </Row>
                  </Tab.Content>
                </Col>
                :
                <Col>
                  <Tab.Content className="mt-lg-n13">
                    <Tab.Pane eventKey="first">
                      <PersonalInformation personalData={data.personalData} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <AddressInformation addresses={data.addresses} />
                    </Tab.Pane>
                    {roleIsEqual(Roles.Donator) &&
                      <>
                        <Tab.Pane eventKey="third">
                          <DonationsOptions donationOptions={data.donationOptions} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <HistoryDonations donationsHistory={data.donationsHistory} />
                        </Tab.Pane>
                      </>
                    }
                  </Tab.Content>
                </Col>}
            </Row>
          </Tab.Container>
        </Col>
      </div>
      <Footer />
    </>
  );
}
