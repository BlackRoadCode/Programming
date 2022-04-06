
import { Observable, Observer, Subject } from "rxjs";

const observer:Observer<any> = { 
    next:value => console.log( 'next: ', value ),
    error:error => console.warn( 'error: ', error ),
    complete: () => console.info( 'Complete' )
 };

 const intervalo$ = new Observable<number>( subscriber => {
   const intervalId = setInterval( () => {
      subscriber.next( Math.random() );
   }, 1000);

   return () => {
      clearInterval( intervalId );
      console.log('Intervalo destruido');      
   };

 });

/**
 * Características importantes del subject.
 * 1. Casteo múltiple. Muchas suscripciones van a estar sujetas a este mismo observable y nos ayuda a distribuir la misma informacipon a todas las suscripciones.
 * 2. También es un observer. Se le puede enviar como argumento al subscribe
 * 3. Next, Error y Complete
 */

 const subject$ = new Subject();
 const subscription = intervalo$.subscribe( subject$ );

 const subs1 = subject$.subscribe( observer );
  const subs2 = subject$.subscribe( observer );

//  const subs1 = intervalo$.subscribe( rnd => { console.log( 'subs1: ', rnd ) });
//  const subs2 = intervalo$.subscribe( rnd => { console.log( 'subs2: ', rnd ) });


setTimeout(() => {
   subject$.next(10);
   subject$.complete();
   subscription.unsubscribe();
}, 3500);

 
