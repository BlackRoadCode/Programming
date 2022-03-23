import { from } from "rxjs";
import { reduce, scan } from "rxjs/operators";

const numeros = [1,2,3,4,5];

const totalAcumulador = ( acc, cur ) => acc + cur;

// Reduce
from( numeros ).pipe(
   reduce( totalAcumulador )
).subscribe( val => console.log('reduce:', val) );

// Scan
from( numeros ).pipe(
   scan( totalAcumulador )
).subscribe( val => console.log('scan:', val) );