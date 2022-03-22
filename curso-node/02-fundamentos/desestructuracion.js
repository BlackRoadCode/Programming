
const deadpool = {
    nombre: 'Wade',
    apellido: "Windston",
    poder: 'regeneración',
    edad: 50,
    getNombre(){
        return `${ this.nombre } ${ this.apellido } tiene el poder: ${ this.poder }`
    }
}

console.clear();

function imprimeHeroe( { nombre, apellido, poder, edad = 100 } ){
    console.log( nombre, apellido, poder, edad );
}

// imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [ h1, h2, h3 ] = heroes;

console.log( h1, h2, h3 );