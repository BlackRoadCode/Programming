( () => {

  let productTitle = 'My Amazing Product';
  let isNew:boolean = false;
  let num1 = 5;
  let num2 = 23;

  productTitle = 'My Amazing Product Change';

  console.log('productTitle: ', productTitle);

  const productDescription = "La descripción del producto";
  console.log('productDescription: ', productDescription);

  const sum = `El resultado es: ${ num1 + num2 }`;
  console.log(sum);

  const summary = `
  title: ${ productTitle }
  description: ${ productDescription }
  price: ${ num2 }
  avaliable: ${ isNew }
  `;

  console.log(summary);


})();
