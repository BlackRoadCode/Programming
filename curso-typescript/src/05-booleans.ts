( () => {

  let isEnable = true;
  let isNew:boolean = false;

  console.log(isNew);
  isNew = true;
  console.log(isNew);

  const random = Math.random();

  let result = ( random > 0.5 ) ? 'Mayor 0.5' : 'Menor 0.5';

  console.log( result );


})();
