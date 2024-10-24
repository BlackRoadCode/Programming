
import PropTypes from "prop-types";

const saludo = 'Hola Mundo const';
const arreglo = [1,2,3,4,5,6];
const booleano = true;
const objeto = {
nombre: 'Pepe',
apellido: 'Sosa'
}

const miFunc = () =>{
    return 'Retorno de una función';
}



const FirstApp = ( { title, subTitle } ) => {

    // console.log( props );
    

    return (
        <>
            <h1>Props</h1>
            <p>{ title }</p>
            <p>{ subTitle }</p>


            {/* <h1>Hola Mundo desde Functional Component</h1>
            <p>Y ahora imprimo el saludo acá: { saludo } y una expresión: { 1 + 1 }</p>
            <p>Aquí imprimo un arreglo: { arreglo }</p>
            <p>Aquí imprimo un booleano: { booleano }</p>
            <p>Aquí imprimo un objeto: { JSON.stringify(objeto) }</p>
            <p>Aquí imprimo el valor de retorno de una función: { miFunc() }</p> */}
        </>
    )
}

FirstApp.propTypes = {
    title:PropTypes.string.isRequired,
    subTitle:PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay título',
    subTitle: 'No hay subtítulo'
}

export default FirstApp