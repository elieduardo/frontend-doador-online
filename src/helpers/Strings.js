export function removeMask(value){
    return value.replace(/[\W_]+/g, '');
} 

export function getNumbers(value){    
    return value.replace(/\D/g, '');
} 

export function cpfFormatter(value) {
    const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;    
    return value.replace(regex, '$1.$2.$3-$4');
}

export function dateStringFormatter(value) {
    const date = new Date(value);
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}