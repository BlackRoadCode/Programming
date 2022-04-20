import { useRef } from 'react';
import './ref.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    
    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

  return (
    <>
        <h1>FocusScreen</h1>
        <hr />

        <input ref={ inputRef } className='form-control' placeholder='Su nombre' />

        <button className='btn btn-outline-primary mt-3' onClick={ handleClick } >Focus</button>
    </>
  )
}
