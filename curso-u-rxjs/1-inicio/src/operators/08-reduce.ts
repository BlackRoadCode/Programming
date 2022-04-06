import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const totalReducer = ( acumulador:number, valorActual:number ) => {
   return acumulador + valorActual;
}


interval(1000).pipe(
   take(3),
   tap( console.log ),
   reduce( totalReducer )
).subscribe( {
   next: val => console.log('next: ', val),
   complete: () => console.log('complete')
})
