
// const arrayEx = new Array( 100 );
const arrayEx = [1,2,3,4];
let arrayEx2 = [...arrayEx, 5];

const arrayEx3 = arrayEx2.map( (x) => { return x * 2; } );

// arrayEx2.push(5);

console.log(arrayEx);
console.log(arrayEx2);
console.log(arrayEx3);