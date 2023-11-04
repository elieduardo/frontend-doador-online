import React, { useState } from "react";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import CustomBreadCrumb from "../../components/CustomBreadCrumb";
import { Button, Col, Form, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { columns } from "./columnsTable";
import { useNavigate } from "react-router-dom";

export default function Donators() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const data = [
        {
            id: 1,
            nome: 'José Cardoso',
            cpf: '583.607.360-06',
            dataNascimento: '04/05/1967',
            tipoSanguineo: 'A+',
            ehDoadorSangue: true,
            ehDoadorMedula: false,
            ehDoadorOrgao: true
        },
        {
            id: 2,
            nome: 'Ana Oliveira',
            cpf: '789.123.456-78',
            dataNascimento: '22/03/1985',
            tipoSanguineo: 'O-',
            ehDoadorSangue: true,
            ehDoadorMedula: true,
            ehDoadorOrgao: false
        },
        {
            id: 3,
            nome: 'Miguel Santos',
            cpf: '925.186.473-05',
            dataNascimento: '12/10/1973',
            tipoSanguineo: 'AB+',
            ehDoadorSangue: true,
            ehDoadorMedula: false,
            ehDoadorOrgao: true
        },
        {
            id: 4,
            nome: 'Beatriz Almeida',
            cpf: '432.987.654-21',
            dataNascimento: '17/09/1990',
            tipoSanguineo: 'A-',
            ehDoadorSangue: false,
            ehDoadorMedula: true,
            ehDoadorOrgao: false
        },
        {
            id: 5,
            nome: 'Rafaela Lima',
            cpf: '111.222.333-44',
            dataNascimento: '02/06/1982',
            tipoSanguineo: 'O+',
            ehDoadorSangue: true,
            ehDoadorMedula: true,
            ehDoadorOrgao: false
        },
        {
            id: 6,
            nome: 'Gustavo Vieira',
            cpf: '777.888.999-00',
            dataNascimento: '25/11/1975',
            tipoSanguineo: 'B-',
            ehDoadorSangue: false,
            ehDoadorMedula: false,
            ehDoadorOrgao: true
        },
        {
            id: 7,
            nome: 'Juliana Fernandes',
            cpf: '444.555.666-77',
            dataNascimento: '30/04/1993',
            tipoSanguineo: 'A+',
            ehDoadorSangue: true,
            ehDoadorMedula: true,
            ehDoadorOrgao: false
        },
        {
            id: 8,
            nome: 'Ricardo Barbosa',
            cpf: '666.777.888-99',
            dataNascimento: '18/08/1987',
            tipoSanguineo: 'O-',
            ehDoadorSangue: false,
            ehDoadorMedula: false,
            ehDoadorOrgao: true
        },
        {
            id: 9,
            nome: 'Fernanda Gomes',
            cpf: '987.654.321-00',
            dataNascimento: '11/03/1971',
            tipoSanguineo: 'AB+',
            ehDoadorSangue: true,
            ehDoadorMedula: false,
            ehDoadorOrgao: false
        },
        {
            id: 10,
            nome: 'Sérgio Rodrigues',
            cpf: '321.654.987-11',
            dataNascimento: '09/07/1992',
            tipoSanguineo: 'B-',
            ehDoadorSangue: false,
            ehDoadorMedula: true,
            ehDoadorOrgao: true
        },
        {
            id: 11,
            nome: 'Isabela Costa',
            cpf: '456.789.123-32',
            dataNascimento: '24/12/1981',
            tipoSanguineo: 'O+',
            ehDoadorSangue: true,
            ehDoadorMedula: true,
            ehDoadorOrgao: false
        },
        {
            id: 12,
            nome: 'Diego Oliveira',
            cpf: '987.654.321-23',
            dataNascimento: '08/06/1974',
            tipoSanguineo: 'A-',
            ehDoadorSangue: false,
            ehDoadorMedula: false,
            ehDoadorOrgao: true
        },
        {
            id: 13,
            nome: 'Mariana Fernandes',
            cpf: '123.456.789-54',
            dataNascimento: '02/09/1995',
            tipoSanguineo: 'B+',
            ehDoadorSangue: true,
            ehDoadorMedula: false,
            ehDoadorOrgao: false
        },
        {
            id: 14,
            nome: 'Pedro Almeida',
            cpf: '543.210.987-65',
            dataNascimento: '15/05/1983',
            tipoSanguineo: 'O-',
            ehDoadorSangue: false,
            ehDoadorMedula: true,
            ehDoadorOrgao: true
        },
        {
            id: 15,
            nome: 'Camila Santos',
            cpf: '678.905.432-98',
            dataNascimento: '28/11/1976',
            tipoSanguineo: 'AB+',
            ehDoadorSangue: true,
            ehDoadorMedula: true,
            ehDoadorOrgao: false
        },
        {
            id: 16,
            nome: 'Jorge Souza',
            cpf: '345.678.901-21',
            dataNascimento: '19/02/1998',
            tipoSanguineo: 'A+',
            ehDoadorSangue: true,
            ehDoadorMedula: false,
            ehDoadorOrgao: true
        },
        {
            id: 17,
            nome: 'Carla Lima',
            cpf: '876.543.210-43',
            dataNascimento: '06/08/1980',
            tipoSanguineo: 'B-',
            ehDoadorSangue: false,
            ehDoadorMedula: true,
            ehDoadorOrgao: false
        },
        {
            id: 18,
            nome: 'Marcelo Fernandes',
            cpf: '109.876.543-21',
            dataNascimento: '23/01/1972',
            tipoSanguineo: 'O+',
            ehDoadorSangue: true,
            ehDoadorMedula: false,
            ehDoadorOrgao: true
        },
        {
            id: 19,
            nome: 'Vitória Rodrigues',
            cpf: '321.654.987-89',
            dataNascimento: '13/04/1991',
            tipoSanguineo: 'AB-',
            ehDoadorSangue: false,
            ehDoadorMedula: false,
            ehDoadorOrgao: true
        },
        {
            id: 20,
            nome: 'Roberto Gomes',
            cpf: '654.321.987-09',
            dataNascimento: '09/12/1978',
            tipoSanguineo: 'A+',
            ehDoadorSangue: true,
            ehDoadorMedula: true,
            ehDoadorOrgao: false
        }
    ];

    const paginationComponentOptions = {
        rowsPerPageText: 'Linhas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todas',
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
                        />
                    </Col>
                    <Col lg={2} sm={6} className="mt-lg-0 mt-3">
                        <Form.Group as={Col} controlId="validationGender">
                            <Form.Select
                                aria-label="Selecione"
                                name="bloodType"
                                id="bloodType"
                            >
                                <option value="">Tipo Doação</option>
                                <option value="1">Sangue</option>
                                <option value="2">Medula</option>
                                <option value="3">Órgãos</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col lg={2} sm={6} className="mt-lg-0 mt-3">
                        <Form.Group as={Col} controlId="validationGender">
                            <Form.Select
                                aria-label="Selecione"
                                name="bloodType"
                                id="bloodType"
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
                        >
                            Filtrar
                        </Button>
                    </Col>
                </Row>
                <div className="pt-4">
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                        onRowClicked={(row) => navigate(`${row.id}`)}
                        paginationComponentOptions={paginationComponentOptions}
                        className="pointer"
                    />
                </div>
                <Footer />
            </div>
        </>)
}