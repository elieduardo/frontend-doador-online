import {
    AiOutlineCheckCircle,
    AiOutlineCloseCircle,
} from "react-icons/ai";

function getIconDonatorRow(value) {
    return value
        ? <AiOutlineCheckCircle color="green" />
        : <AiOutlineCloseCircle color="red" />;
}

export const columns = [
    {
        name: 'Nome',
        selector: row => row.nome,
        sortable: true,
    },
    {
        name: 'Cpf',
        selector: row => row.cpf,
        sortable: true,
    },
    {
        name: 'Data Nascimento',
        selector: row => row.dataNascimento,
        sortable: true,
    },
    {
        name: 'Tipo Sanguíneo',
        selector: row => row.tipoSanguineo,
        center: true
    },
    {
        name: 'Doador Sangue',
        selector: row => getIconDonatorRow(row.ehDoadorSangue),
        center: true
    },
    {
        name: 'Doador Medula',
        selector: row => getIconDonatorRow(row.ehDoadorMedula),
        center: true
    },
    {
        name: 'Doador Órgão',
        selector: row => getIconDonatorRow(row.ehDoadorOrgao),
        center: true
    }
];
