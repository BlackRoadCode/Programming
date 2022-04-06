import { asyncScheduler, range } from "rxjs";

const source$ = range(-5,6, asyncScheduler);

console.log('Inicio de la ejecución');
source$.subscribe( resl => {
   console.log( resl );   
} );
console.log('Fin de la ejecución');