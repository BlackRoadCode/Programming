import React from "react";

export const Small = React.memo(( { value } ) => {

    console.log('Llamada en el mini-componente Small.');

  return (
      <>
      <small>{ value }</small>
      </>
  )
});
