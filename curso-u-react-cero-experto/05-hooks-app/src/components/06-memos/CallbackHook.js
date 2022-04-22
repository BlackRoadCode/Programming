
import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import './ref.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    
    const increment = useCallback( ( num ) => {
        setCounter( c => c + num );
    }, [ setCounter ]);
    

  return (
    <>
        <h1>CallbackHook: { counter }</h1>
        <hr />

        <ShowIncrement increment={ increment } />
    </>
  )
}