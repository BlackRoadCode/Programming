import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './examples.css';

export const MultipleCustomHooks = () => {

  const { state:counter, increment } = useCounter();
  const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
  const { quote, author, series } = !!data && data[0];

  return (
    <div>
        
        <h1>Breaking Bad Quotes</h1>
        <hr />

        {
            loading ? 
            (
              <div className='alert alert-info text-center' >Loading...</div>
            ) : 
            (
              <div className='blockquote'>
                <p>{ quote }</p>
                <footer className='blockquote-footer'>{ author } - { series }</footer>
              </div>
            )

        }

        <button className='btn btn-dark mt-3' onClick={ () => increment() } >Next Quote</button>
    </div>
  )
}
