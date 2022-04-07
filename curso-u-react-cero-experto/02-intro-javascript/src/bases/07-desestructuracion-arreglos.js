
const characters = [ 'Goku', 'Gohan', 'Vegeta' ];

const [ , ch2 ] = characters;

console.log( ch2 );

const returnArray = () => {
    return ['ABC', 123]
};

const [ elem1, elem2 ] = returnArray();

console.log(elem1);
console.log(elem2);

const ouseState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo'); } ];
}

const [ nombre, setNombre ] = ouseState('Trunks');

console.log(nombre);
setNombre();
