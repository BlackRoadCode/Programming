
const saludar =  (nombre) => {
    return `Hola, ${ nombre }`;
}

const saludar2 =  (nombre) => `Hola, ${ nombre }`;

const getUsuarioActivo = ( nombre ) => ({
    uid:'123456',
    username: nombre
});

console.log(saludar('Krillin'));
console.log(saludar2('Goku'));

console.log( getUsuarioActivo('Pepe') );