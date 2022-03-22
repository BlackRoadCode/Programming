
import './TodoButton.css';

function TodoButton( props ){

    const onClickButton = () =>{
        alert('Aquí le diste clic, no me quieras ver la cara de pendejo.')
    };

    return(
        <button 
        className='todo-button'
        onClick={ onClickButton }
        >+</button>
    );
}

export { TodoButton };