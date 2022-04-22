import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './ref.css';

export const LayoutEffect = () => {

  const { state:counter, increment } = useCounter();
  const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
  const { quote } = !!data && data[0];

  const pReference = useRef();
  const [boxSize, setBoxSize] = useState();

  useLayoutEffect(() => {
    setBoxSize( pReference.current.getBoundingClientRect() );
  }, [quote])

  return (
    <div>
        
        <h1>Layout Effect</h1>
        <hr />

        <div className='blockquote'>
          <p ref={ pReference } >{ quote }</p>
        </div>

        <pre>
             { JSON.stringify(boxSize, null, 3) }
        </pre>

        <button className='btn btn-dark mt-3' onClick={ () => increment() } >Next Quote</button>
    </div>
  )
}
