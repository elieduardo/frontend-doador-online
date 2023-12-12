import React, { useCallback, useEffect, useState } from "react";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import CustomBreadCrumb from "../../components/CustomBreadCrumb";
import { Button, Col, Form, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { columns } from "./columnsTable";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/userServices";
import { toast } from "react-toastify";

export default function Donators() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filterValues, setFilterValues] = useState({
        name: "",
        donationType: "",
        bloodType: "",
        rhFactor: ""
    });

    const navigate = useNavigate();

    const handleGetUsers = useCallback(async () => {
        setIsLoading(true);
        await getUsers(filterValues)
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
    }, [filterValues]);

    useEffect(() => {
        handleGetUsers();
    }, [handleGetUsers]);

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

    const handleDonationTypeChange = (event) => {
        setFilterValues({
            ...filterValues,
            donationType: event.target.value,
        });
    }

    const paginationComponentOptions = {
        rowsPerPageText: 'Linhas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todas'
    };


    return (
        <>
            <NavBarComp />
            <CustomBreadCrumb title={"Doadores"} />
            <div className="px-5 py-2">
                <Row className="mb-4">
                    <Col lg={5} sm={12} className="mt-lg-0 mt-3">
                        <Form.Control
                            type="search"
                            placeholder="Pesquisar por nome"
                            className="me-2 rounded-pill"
                            aria-label="Pesquisar"
                            onChange={handleNameChange}
                        />
                    </Col>
                    <Col lg={2} sm={6} className="mt-lg-0 mt-3">
                        <Form.Group as={Col} controlId="donationTypeControlId">
                            <Form.Select
                                aria-label="Selecione"
                                name="donationType"
                                id="donationType"
                                onChange={handleDonationTypeChange}
                            >
                                <option value="">Tipo Doação</option>
                                <option value="1">Sangue</option>
                                <option value="2">Medula</option>
                                <option value="3">Órgãos</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col lg={2} sm={6} className="mt-lg-0 mt-3">
                        <Form.Group as={Col} controlId="bloodTypeControlId">
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
                        <Form.Group as={Col} controlId="rhFactorControlId">
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
                            onClick={() => handleGetUsers()}
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
                    <div className="pt-4">
                        <DataTable
                            columns={columns}
                            data={data}
                            pagination
                            onRowClicked={(row) => navigate(`${row.id}`)}
                            paginationComponentOptions={paginationComponentOptions}
                            noDataComponent={"Nenhum doador para exibir no momento."}
                            className="pointer"
                        />
                    </div>}
                <Footer />
            </div>
        </>)
}