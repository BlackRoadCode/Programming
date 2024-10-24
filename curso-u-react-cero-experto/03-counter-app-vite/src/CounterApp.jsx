
import PropTypes from 'prop-types'
import { useState } from 'react'


function CounterApp({ value }) {
  
  const [counter, setCounter] = useState( value );
  
  const handleSub = (e) => {
    setCounter( counter - 1 );
  }
  const handleRes = (e) => {
    setCounter( value );
  }
  const handleAdd = (e) => {
    setCounter( counter + 1 );
  }

  return (
    <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleSub }>-1</button>
        <button onClick={ handleRes }>reset</button>
        <button onClick={ handleAdd }>+1</button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp
