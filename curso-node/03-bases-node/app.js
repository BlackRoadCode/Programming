
const { generaTxtTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

// Obtener argumentos de la línea de comando de modo precario
// const [ , , arg3 = 'base=1' ] = process.argv;
// const [ , base = 1 ] = arg3.split('=');


generaTxtTabla( argv.base, argv.list )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado correctamente' .brightGreen ) )
    .catch( err => console.log( err ) );