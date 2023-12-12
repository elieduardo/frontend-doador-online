import React, { useCallback, useEffect, useState } from "react";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import ItemCampaign from "../../components/ItemCampaign";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import ModalCampaign from "./modalCampaign";
import { getCampaigns } from "../../services/campaignServices";
import { toast } from "react-toastify";

export default function Campaigns() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filterValues, setFilterValues] = useState({
        name: "",
        bloodType: "",
        rhFactor: ""
    });

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const handleGetCampaigns = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await getCampaigns(filterValues);
            setData(response.data);
        } catch (error) {
            toast.error(`${error.status} - ${error.messages}`, {
                autoClose: 3000,
                hideProgressBar: true,
            });
        } finally {
            setIsLoading(false);
        }
    }, [filterValues]);

    useEffect(() => {
        handleGetCampaigns();
    }, [handleGetCampaigns]);

    const handleBloodTypeChange = (event) => {
        setFilterValues({
            ...filterValues,
            bloodType: event.target.value,
        });
    }

    const handleRhFactorChange = (event) => {
        setFilterValues({
            ...filterValues,
            rhFactor: event.target.value,
        });
    }

    const handleNameChange = (event) => {
        setFilterValues({
            ...filterValues,
            name: event.target.value,
        });
    }

    return (
        <>
            <NavBarComp />
            <div className={`px-5 pt-3`}>
                <Row>
                    <Col sm={12} md={12} lg={6} className="title-sm text-lg-start text-center">Campanhas</Col>
                    <Col sm={12} md={12} lg={6} className="text-lg-end text-center mt-4 mt-lg-0">
                        <ModalCampaign handleGetCampaigns={handleGetCampaigns} />
                    </Col>
                </Row>
                <div className="pb-3 pb-4 mt-3 border-top" />
            </div>
            <div className="px-5 py-2">
                <Row className="mb-4">
                    <Col lg={7} sm={12} className="mt-lg-0 mt-3">
                        <Form.Control
                            type="search"
                            placeholder="Pesquisar por nome"
                            className="me-2 rounded-pill"
                            aria-label="Pesquisar"
                            onChange={handleNameChange}
                        />
                    </Col>
                    <Col lg={2} sm={6} className="mt-lg-0 mt-3">
                        <Form.Group as={Col} controlId="validationGender">
                            <Form.Select
                                aria-label="Selecione"
                                name="bloodType"
                                id="bloodType"
                                onChange={handleBloodTypeChange}
                            >
                                <option value="">Tipo Sanguíneo</option>
                                <option value="1">A</option>
                                <option value="2">B</option>
                                <option value="3">AB</option>
                                <option value="4">O</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col lg={2} sm={6} className="mt-lg-0 mt-3">
                        <Form.Group as={Col} controlId="validationGender">
                            <Form.Select
                                aria-label="Selecione"
                                name="rhFactor"
                                id="rhFactor"
                                onChange={handleRhFactorChange}
                            >
                                <option value="">Fator Rh</option>
                                <option value="1">+</option>
                                <option value="2">-</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col lg={1} sm={12} className="mt-lg-0 mt-3 text-center">
                        <Button
                            type="button"
                            variant="outline-primary"
                            onClick={() => { handleGetCampaigns() }}
                        >
                            Filtrar
                        </Button>
                    </Col>
                </Row>
                {isLoading
                    ?
                    <Row className="justify-content-center align-items-center my-7">
                        <Col className="text-center">
                            Aguarde
                            <span className="ms-1 spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                        </Col>
                    </Row>
                    :
                    <Row>
                        {data.map(x =>
                        (<Col lg={3} md={4}>
                            <ItemCampaign data={x} />
                        </Col>))}
                        {data.length === 0 && <Alert className="mx-3 my-7 text-center">Nenhuma campanha foi encontrada.</Alert>}
                    </Row>
                }
                <Footer />
            </div></>)
}