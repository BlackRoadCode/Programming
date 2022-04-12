
const name = 'Pepe';
const lastName = 'Sosa';

const completeName = `${ name } ${ lastName }`;

export function getSaludo( nombre = 'Carlos' ){
    return `Hola ${ nombre }`;
}