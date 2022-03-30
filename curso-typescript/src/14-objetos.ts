( () => {

  const login = ( data:{ email:string, password:number } ) => {
    console.log( data.email, data.password );
  };

  const userTest = {
    email:'otromail@gmail.com',
    password:456789456789
  }

  console.log( login( {email:'mail@mail.com', password:12345678} ) );
  console.log( login( userTest ) );

})();
