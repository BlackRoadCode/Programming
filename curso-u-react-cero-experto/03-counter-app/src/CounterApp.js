import { PropTypes } from "prop-types";
import { useState } from 'react';

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(0);

    const handleSubtract = ( ) => {
        setCounter( counter - 1 );
    };

    const handleReset = (e) => {
        setCounter( (c) => c = 0 );
    };

    const handleAdd = ( ) => {
        setCounter( counter + 1 );
        // setCounter( (c) => { return c + 1 } );
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleSubtract } >-1</button>
            <button onClick={ handleReset } >Reset</button>
            <button onClick={ handleAdd } >+1</button>
        </>
    );

}

CounterApp.propTypes = {
    value:PropTypes.number.isRequired
}

export default CounterApp
