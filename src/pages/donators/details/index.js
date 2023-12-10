import React, { useEffect, useState } from "react";
import NavBarComp from "../../../components/NavBarComp";
import Footer from "../../../components/Footer";
import CustomBreadCrumb from "../../../components/CustomBreadCrumb";
import { Col, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { columns } from "./columnsTable";
import ModalDonation from "./modalDonation";
import { getDonations } from "../../../services/userServices";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export default function Donator() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    let { id } = useParams();

    const handleGetDonationsHistory = async () => {
        setIsLoading(true);
        await getDonations(id)
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

    useEffect(() => { handleGetDonationsHistory(); }, [])

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
                    <Col sm={12} md={12} lg={6} className="title-sm text-lg-start text-center">{data.nome}</Col>
                    <Col sm={12} md={12} lg={6} className="text-lg-end text-center mt-4 mt-lg-0">
                        <ModalDonation userId={id} handleReload={handleGetDonationsHistory}/>
                    </Col>
                </Row>
            </div>
            <div className="px-5 pb-2">
                <div className="pt-3">
                    {isLoading
                        ?
                        <Row className="justify-content-center align-items-center my-7">
                            <Col className="text-center">
                                Aguarde
                                <span className="ms-1 spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                            </Col>
                        </Row>
                        :
                        <DataTable
                            columns={columns}
                            data={data.donations}
                            noDataComponent={"Nenhuma doação para exibir no momento."}
                            pagination
                            paginationComponentOptions={paginationComponentOptions}
                        />
                    }
                </div>
                <Footer />
            </div>
        </>)
}