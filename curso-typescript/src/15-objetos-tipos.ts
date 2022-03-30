( () => {

  type Size = 'S' | 'M' | 'L' | 'XL' ;
  type Product = { title: string, createdAt:Date, stock:number, size?:Size };

  const products: Product[] = [];

  const addProduct = ( data:Product ) => {
    products.push( data );
  };

})();
