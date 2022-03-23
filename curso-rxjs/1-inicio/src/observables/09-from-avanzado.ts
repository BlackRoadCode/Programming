import { of, from } from "rxjs";

const observer = {
   next: val => console.log( 'next:', val ),
   complete: () => console.log('complete')
}

// const source$ = from( [1,2,3,4,5] );
// const source$ = of( ...[1,2,3,4,5] );

// const source$ = from( 'Pepe Sosa' );
// const source$ = of( 'Pepe Sosa' );

const source$ = from( fetch('https://api.github.com/users/klerith') );

const miGenerador = function*(){
   yield 1;
   yield 2;
   yield 3;
   yield 4;
   yield 5;
}

const miIterable = miGenerador();

from( miIterable ).subscribe( observer );


// source$.subscribe( async(response) => {
//    console.log( response );

//    const dataResp = await response.json();

//    console.log( dataResp );
   
// });

// source$.subscribe( observer );
