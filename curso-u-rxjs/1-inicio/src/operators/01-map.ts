import { fromEvent, range } from "rxjs";
import { map } from "rxjs/operators";

range( 1, 5 ).pipe( 
   map<number, string>( res => (res*10).toString() ) 
   ).subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

keyup$.pipe(
   map( event => event.code)
).subscribe( code => console.log('map', code) );
