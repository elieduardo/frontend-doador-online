import { dateStringFormatter } from "../../../helpers/Strings";

export const columns = [
    {
        name: 'Tipo Doação',
        selector: row => row.donationType,
        sortable: true,
    },
    {
        name: 'Local',
        selector: row => row.hospital,
        sortable: true,
    },
    {
        name: 'Data',
        selector: row => dateStringFormatter(row.donationDate),
        sortable: true,
    },
    {
        name: 'Pontuação Adquirida',
        selector: row => '+' + row.pointsEarned,
        center: true
    },
];