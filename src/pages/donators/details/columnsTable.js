export const columns = [
    {
        name: 'Tipo Doação',
        selector: row => row.tipoDoacao,
        sortable: true,
    },
    {
        name: 'Local',
        selector: row => row.local,
        sortable: true,
    },
    {
        name: 'Data',
        selector: row => row.data,
        sortable: true,
    },
    {
        name: 'Pontuação Adquirida',
        selector: row => row.pontuacao,
        center: true
    },
];