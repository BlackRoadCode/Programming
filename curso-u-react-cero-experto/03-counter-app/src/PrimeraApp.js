import { PropTypes } from "prop-types";

const PrimeraApp = ( { saludoProp, subtituloDefaultProp } ) =>{

    const saludo = 'Hola Mundo const';
    const arreglo = [ 1, 2, 3, 4, 5, 6 ];
    const booleano = true;
    const objeto = {
        nombre: 'Pepe',
        apellido: 'Sosa'
    }

    return (
        <>
            {/* <h1>Hola Mundo desde Functional Component</h1>
            <p>Y ahora imprimo el saludo acá: { saludo } y una expresión: { 1 + 1 }</p>
            <p>Aquí imprimo un arreglo: { arreglo }</p>
            <p>Aquí imprimo un booleano: { booleano }</p>
            <p>Aquí imprimo un objeto: { JSON.stringify(objeto) }</p>

            <h2>Esto lo imprimo desde las props</h2> */}
            <h1> { saludoProp } </h1>
            <p> { subtituloDefaultProp } </p>
        </>
    )
}

PrimeraApp.propTypes = {
    saludoProp:PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtituloDefaultProp: 'valor por default'
}

export default PrimeraApp 