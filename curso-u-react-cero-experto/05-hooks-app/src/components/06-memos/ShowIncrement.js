
export const ShowIncrement = ({ increment }) => {

    console.log('Se genera de nuevo showIncrement');

  return (
    <button className="btn btn-primary" onClick={ () => { increment(); } } >Incrementar</button>
  )
}
