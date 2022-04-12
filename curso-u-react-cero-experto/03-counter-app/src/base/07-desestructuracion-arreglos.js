
const characters = [ 'Goku', 'Gohan', 'Vegeta' ];

const [ , ch2 ] = characters;

export const returnArray = () => {
    return ['ABC', 123]
};

// const [ elem1, elem2 ] = returnArray();

const ouseState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo'); } ];
}
