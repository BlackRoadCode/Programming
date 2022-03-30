( () => {

  let myDynamicVar:any;

  myDynamicVar = 123;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = false;
  myDynamicVar = 'Pepe Sosa';

  // cast forma 1
  const cast1 = ( myDynamicVar as string ).toLowerCase();
  console.log(cast1);

  // cast forma 2
  myDynamicVar = 123;
  const cast2 = ( <number>myDynamicVar ).toFixed();
  console.log(cast2);

})();
