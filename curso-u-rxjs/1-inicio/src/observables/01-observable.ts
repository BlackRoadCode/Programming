import { Observable, Observer } from "rxjs";

const observer:Observer<string> = { 
    next:value => console.log( 'next: ', value ),
    error:error => console.warn( 'error: ', error ),
    complete: () => console.info( 'Complete' )
 };

const obs$ = new Observable<string>( subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');

    // Forzando un error
    // const a = undefined;
    // a.nombre = 'Pepe';

    subscriber.complete();
    
    subscriber.next('Nombre');
    subscriber.next('Apellido');
});

obs$.subscribe( observer );

// obs$.subscribe( 
//     valor => console.log( 'next: ', valor ),
//     error => console.error( 'error: ', error ),
//     () => console.info( 'Finalizado' )
//  );