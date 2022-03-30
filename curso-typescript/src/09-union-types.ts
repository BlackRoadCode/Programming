( () => {

  let userId: string | number;

  userId = 1234;
  userId = 'ABC123'

  function greeting( myText: string | number ){

    if( typeof myText == 'string' ){
      console.log( 'Esto mandaste en el parámetro: ', myText );
    } else{
      console.log( 'Mandaste un número: ', myText );
    }

  }

  greeting('Pepe Sosa');
  greeting(12345);

})();
