import { fromEvent } from "rxjs";
import { mapTo } from "rxjs/operators";

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyupmapTo$ = keyup$.pipe(
   mapTo({ nombre:'Pepe', apellido:'Sosa' })
);

keyupmapTo$.subscribe( resp => console.log( 'mapTo', resp ) );
