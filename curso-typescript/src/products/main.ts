import { Product } from './product.model';
import { addProduct, calcStock, products } from './product.service';

const product1:Product = {
  name:'Mayonesa Mc cormick',
  createdAt: new Date(),
  stock: 100,
  size: 'M'
}

const product2:Product = {
  name:'Mayonesa Mc cormick',
  createdAt: new Date(),
  stock: 50,
  size: 'S'
}

addProduct( product1 );
addProduct( product2 );

console.log(products);

const total = calcStock();

console.log( total );


