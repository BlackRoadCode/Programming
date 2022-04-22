import { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import './ref.css';

export const MemoHook = () => {

    const { state:counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);
    const memoProcesoPesado = useMemo( () => procesoPesado(counter), [ counter ] );

  return (
      <>
        <h1>Memo Hook</h1>
        <h3>Counter: <small>{ counter }</small> </h3>
        <hr />

        <p>{ memoProcesoPesado }</p>

        <button className='btn btn-primary mt-3' onClick={ () => { increment() } } >Incrementar Counter</button>
        <button className='btn btn-danger mt-3 mx-3' onClick={ () => setShow( !show ) } >Show/Hide { JSON.stringify(show) } </button>
      </>
  )
};
