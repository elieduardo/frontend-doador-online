import React, { useEffect, useState } from "react";
import NavBarComp from "../../../components/NavBarComp";
import Footer from "../../../components/Footer";
import CustomBreadCrumb from "../../../components/CustomBreadCrumb";
import { Col, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { columns } from "./columnsTable";
import ModalDonation from "./modalDonation";

export default function Donator() {
    const [isLoading, setIsLoading] = useState(false);
    const data = [
        {
            id: 1,
            tipoDoacao: "Sangue",
            local: "Hospital Padre Jeremias",
            data: "09/10/2022 10:57",
            pontuacao: "+ 150"
        },
        {
            id: 2,
            tipoDoacao: "Sangue",
            local: "Hospital Padre Jeremias",
            data: "26/05/2023 16:09",
            pontuacao: "+ 100"
        }
    ];

    const paginationComponentOptions = {
        rowsPerPageText: 'Linhas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todas',
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <NavBarComp />
            <CustomBreadCrumb title={"Histórico"} whithPb={false} />
            <div className="mb-4 px-5">
                <Row>
                    <Col sm={12} md={12} lg={6} className="title-sm text-lg-start text-center">Joana Cardoso Vieira</Col>
                    <Col sm={12} md={12} lg={6} className="text-lg-end text-center mt-4 mt-lg-0">
                        <ModalDonation />
                    </Col>
                </Row>
            </div>
            <div className="px-5 pb-2">
                <div className="pt-3">
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                        paginationComponentOptions={paginationComponentOptions}
                    />
                </div>
                <Footer />
            </div>
        </>)
}