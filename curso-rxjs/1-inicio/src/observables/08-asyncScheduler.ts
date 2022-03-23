/*

Reslmente no es un observable, es una suscripción (suscription)

*/ 

import { asyncScheduler } from "rxjs";

// setTimeout( () => { }, 3000 );
// setInterval( () => { }, 3000 );

const saludar = () => console.log('Hola Mundo');
const saludarDos = (nombre) => console.log(`Hola ${ nombre }`);

// asyncScheduler.schedule( saludar, 2000 );
// asyncScheduler.schedule( saludarDos, 2000, 'Pepe' );

const subscription = asyncScheduler.schedule( function(state){

   console.log('state: ', state);

   this.schedule( state + 1, 1000 );

}, 2000, 0);

// setTimeout(() => {
//    subscription.unsubscribe();
// }, 6000);


asyncScheduler.schedule( () => subscription.unsubscribe(), 6000 );