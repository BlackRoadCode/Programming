( () => {

  type Size = 'S' | 'M' | 'L' | 'XL' ;

  function createProductToJson( title: string, createdAt:Date, stock:number, size:Size  ){

    return {
      title,
      createdAt,
      stock,
      size
     }

  }

  const createProductToJsonV2 = ( title: string, createdAt:Date, stock:number, size?:Size  ) => {
    return {
      title,
      createdAt,
      stock,
      size
     }

  }

  const product = createProductToJson( 'Teñis Maik', new Date(), 30, 'M' );

  console.log(product);

  console.log(product.title);
  console.log(product.createdAt);
  console.log(product.stock);
  console.log(product.size);

  const product2 = createProductToJsonV2( 'Teñis Fuma', new Date(), 40 );

  console.log(product2);

  console.log(product2.title);
  console.log(product2.createdAt);
  console.log(product2.stock);

})();
