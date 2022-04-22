
import { useCallback, useState } from 'react';
import './ref.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    // }
    
    const increment = useCallback( () => {
        setCounter( c => c + 1 );
    }, [ setCounter ]);
    

  return (
    <>
        <h1>CallbackHook: { counter }</h1>
        <hr />

        <ShowIncrement increment={ increment } />
    </>
  )
}
