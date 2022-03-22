
console.clear();

// function sumar( a, b = 50 ){
//     return a + b;
// }

const sumar = ( a, b = 5 ) => a + b;
const saludar = () => 'Hola Mundo';

console.log( sumar( 5, 1 ) );
console.log( saludar( ) );