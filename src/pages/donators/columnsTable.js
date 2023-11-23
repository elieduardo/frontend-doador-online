import {
    AiOutlineCheckCircle,
    AiOutlineCloseCircle,
} from "react-icons/ai";
import { cpfFormatter, dateStringFormatter } from "../../helpers/Strings";

function getIconDonatorRow(value) {
    return value
        ? <AiOutlineCheckCircle color="green" />
        : <AiOutlineCloseCircle color="red" />;
}

export const columns = [
    {
        name: 'Nome',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Cpf',
        selector: row => cpfFormatter(row.cpf),
        sortable: true,
    },
    {
        name: 'Data Nascimento',
        selector: row => dateStringFormatter(row.birthDate),
        sortable: true,
    },
    {
        name: 'Tipo Sanguíneo',
        selector: row => row.bloodType,
        center: true
    },
    {
        name: 'Doador Sangue',
        selector: row => getIconDonatorRow(row.isBloodDonator),
        center: true
    },
    {
        name: 'Doador Medula',
        selector: row => getIconDonatorRow(row.isMarrowDonator),
        center: true
    },
    {
        name: 'Doador Órgão',
        selector: row => getIconDonatorRow(row.isOrganDonator),
        center: true
    }
];
