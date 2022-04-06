
const name = 'Pepe';
const lastName = 'Sosa';

// const completeName = name + ' ' + lastName;
const completeName = `${ name } ${ lastName }`;

console.log(completeName);

function getSaludo( nombre ){
    return `Hola ${ nombre }`;
}

console.log(`Este es un saludo: ${ getSaludo( completeName ) }`);