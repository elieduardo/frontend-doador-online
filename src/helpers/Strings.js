export function removeMask(value){
    return value.replace(/[\W_]+/g, '');
} 