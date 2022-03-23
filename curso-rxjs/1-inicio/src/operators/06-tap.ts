import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range( 1,5 );

numeros$.pipe(
   tap( x => {
      console.log( 'antes', x );
      return 100;
   } ),
   map( val => val * 10 ),
   tap( {
      next: val => console.log( 'después', val ),
      complete: () => console.log( 'ha finalizado la ejecución' )
   } )
).subscribe( val => console.log( 'subscribe: ', val ) );

