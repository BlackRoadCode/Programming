import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = ( data:Product ) => {
  products.push( data );
};


export const calcStock = ():number => {
  return products.reduce( (item1 , item2) => item1 + item2.stock, 0  );
};
