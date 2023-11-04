import React, { useState } from "react";
import NavBarComp from "../../../components/NavBarComp";
import CustomBreadCrumb from "../../../components/CustomBreadCrumb";
import DataTable from "react-data-table-component";
import { columns } from "../../donators/details/columnsTable";
import Footer from "../../../components/Footer";

export default function HistoryDonations() {
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

    return (
        <div className="mx-lg-5 px-2">
            <div className="title-md mb-4">Histórico de Doações</div>
            <div className="pt-3">
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                />
            </div>
        </div>
    );
}