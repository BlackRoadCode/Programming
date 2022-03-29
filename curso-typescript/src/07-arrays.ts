(() => {

  let prices = [1, 2, 3, 4, 5, 6];

  console.log( prices );

  prices.push( 50 );

  console.log( prices );

  let products = [ 'Batidora', 'Capa para volar', true, 'Magnum 45', false ];
  products.push('123');

  console.log( products );

  let mixed: ( number | string  | boolean )[] = ['Hola', true];
  mixed.push(123);

  console.log(mixed);

  let numbers = [1,2,3,4,5,6,10,18];
  console.log(numbers);

  let otroNumbers = numbers.map( item => item * 3 );
  console.log(otroNumbers);

})();
