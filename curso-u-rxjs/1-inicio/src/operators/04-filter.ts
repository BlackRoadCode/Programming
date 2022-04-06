import { from } from "rxjs";
import { filter } from "rxjs/operators";

interface Personaje {
   tipo:string;
   nombre:string;
}

const personajes:Personaje[] = [
   {
      tipo: 'heroe',
      nombre: 'Batman'
   },
   {
      tipo: 'heroe',
      nombre: 'Robin'
   },
   {
      tipo: 'villano',
      nombre: 'Joker'
   }
]

const personajes$ = from( personajes );

personajes$.pipe(
   filter(val => val.tipo != 'heroe')
).subscribe(console.log);