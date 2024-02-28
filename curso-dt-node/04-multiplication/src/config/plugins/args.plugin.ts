import yargs from 'yargs';
import { hideBin } from "yargs/helpers";

export const yarg = yargs( hideBin(process.argv))
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Límite de la tabla de multiplicar'
})
.option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla de multiplicar'
})
.option('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'Nombre del archivo'
})
.option('d', {
    alias: 'destination',
    type: 'string',
    default: './outputs',
    describe: 'Destino del archivo'
})
.check( ( argv, options )=>{
    if( argv.b < 1 ) throw 'Error: La base debe ser mayor a 0';
    if( argv.l < 1 ) throw 'Error: El límite debe ser mayor a 0';
    return true;
})
.parseSync();
