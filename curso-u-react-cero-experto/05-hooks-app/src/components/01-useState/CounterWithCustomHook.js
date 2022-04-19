
import { useCounter } from '../../hooks/useCounter';
import './useState.css';

export const CounterWithCustomHook = () => {

    const { state:counter, increment, decrement, reset } = useCounter();

  return (
    <>
        <h1>Counter With hook: { counter }</h1>
        <hr />
        <button onClick={ () => decrement(5) } className='btn btn-danger mx-3'> - 1 </button>
        <button onClick={ reset } className='btn btn-warning mx-3'> Reset </button>
        <button onClick={ () => increment(5) } className='btn btn-success mx-3'> + 1 </button>
    </>
  )
}
