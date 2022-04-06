
import { Observable, Observer, Subscriber } from "rxjs";

const observer:Observer<any> = { 
    next:value => console.log( 'next: ', value ),
    error:error => console.warn( 'error: ', error ),
    complete: () => console.info( 'Complete' )
 };

 const intervalo$ = new Observable<number>( subscriber => {
     let count = 0;

     const interval = setInterval( () =>{
        subscriber.next( count += 1 );
        // console.log(count);
     }, 1000 );

     setTimeout( () => {
        subscriber.complete();     
     }, 2500);

     return () => {
        clearInterval( interval );
        console.log('intérvalo finalizado');
     }

 } );

//  const subscription = intervalo$.subscribe( num => console.log( 'num: ', num ) );
//  const subscription2 = intervalo$.subscribe( num => console.log( 'num: ', num ) );
//  const subscription3 = intervalo$.subscribe( num => console.log( 'num: ', num ) );
 
 const subscription = intervalo$.subscribe( observer );
 const subscription2 = intervalo$.subscribe( observer );
 const subscription3 = intervalo$.subscribe( observer );

 // Encadenando suscripciones a la suscripción original
 subscription.add( subscription2 ).add( subscription3 );

 setTimeout( () => {
    subscription.unsubscribe();
   //  subscription2.unsubscribe();
   //  subscription3.unsubscribe();

    console.log('Finalizado segundo timeout');    
 }, 6000);