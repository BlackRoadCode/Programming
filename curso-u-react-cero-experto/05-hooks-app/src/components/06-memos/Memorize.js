import { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import './ref.css';

export const Memorize = () => {

    const { state:counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

  return (
      <>
        <h1>Counter: <Small value={ counter } /> </h1>
        <hr />

        <button className='btn btn-primary mt-3' onClick={ () => { increment() } } >Incrementar Counter</button>
        <button className='btn btn-danger mt-3 mx-3' onClick={ () => setShow( !show ) } >Show/Hide { JSON.stringify(show) } </button>
      
      </>
  )
};
