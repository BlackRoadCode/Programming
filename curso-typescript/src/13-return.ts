( () => {

  const calcTotal = ( prices:number[] ):string => {
    return (prices.reduce( (item1, item2) => item1 + item2, 0  )).toString();
  }

  console.log( calcTotal( [1,5,2,3, 100] ) );

  const funcNoReturn = ( some:string ):void => {
      console.log(`Tu pasaste como parámetro: ${ some }`);
  };

  funcNoReturn('estas palabras');

})();
