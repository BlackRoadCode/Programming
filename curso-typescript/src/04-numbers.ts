( () => {

  let productPrice = 100;
  productPrice = 12;

  console.log( 'productPrice: ', productPrice );

  let customerAge: number = 28;
  customerAge += 1;

  console.log( 'customerAge: ', customerAge );

  let productInStock:number;
  console.log('productInStock: ', productInStock);

  if( productInStock > 10 ){
    console.log('Stock sano');
  }

  let discount = parseInt('199');
  console.log('discount: ', discount);

  console.log(( discount <= 200 ) ? 'apply' : 'not apply');

  let hex = 0xFFF;
  console.log(hex);

  let bin = 0b1010110;
  console.log(bin);

  const myNumber1:number = 10;
  console.log(myNumber1);

  const myNumber:Number = 10;
  console.log(myNumber);

})();
