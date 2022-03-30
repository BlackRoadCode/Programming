( () => {

  // let myNumber: number = undefined;
  // let myString: string = null;

  let myNull:null = null;
  let myUndefined:undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 122;

  let myString: string | undefined = undefined;
  myString = 'ABC';

  function hi( name: string | null ){
    let hello:string = 'Hola ';
    return ( name ) ? hello += name : hello += 'usuario';
  }

  function hiv2( name: string | null ){
    let hello:string = 'Hola ';
    return hello += name?.toLowerCase() || 'nobody';
  }

  console.log( hi('Pepe') );
  console.log( hiv2('Sosa') );
  console.log( hiv2( null ) );

})();
