const argv = require('yargs')
    .option( 'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    }).check( (argv, options) => {
        if( isNaN( argv.b ) ){
            throw 'La base tiene que ser un número'
        }

        return true;
    })
    .option( 'l', {
        alias:'list',
        type: 'boolean',
        demandOption: false,
        describe: 'Muestra la tabla en consola'
    })
    .argv;

    module.exports = argv;