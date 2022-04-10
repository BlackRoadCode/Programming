import { PropTypes } from "prop-types";
import { useState } from 'react';

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(0);

    const delMouse = (e) => {
        setCounter( counter + 1 );
        // setCounter( (c) => { return c + 1 } );
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ delMouse } >+1</button>
        </>
    );

}

CounterApp.propTypes = {
    value:PropTypes.number.isRequired
}

export default CounterApp
