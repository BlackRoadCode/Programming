( () => {

  type UserId = string | number | boolean;

  let userId: UserId;

  // Literal types
  type ShirtSize = 'S'| 'M' | 'L' | 'XL';
  let shirtSize: ShirtSize;

  function greeting( userId:UserId, size:ShirtSize ){
    if( typeof userId === 'string' ){
      console.log( `Se necesita camisa para el usuario: ${ userId } y la talla de camisa es: ${ size }` );
    }
  }

  console.log(greeting( '123ABC', 'M' ));

})();
