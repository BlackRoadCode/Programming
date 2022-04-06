
import './TodoCounter.css';

function TodoCounter( { completedTodos, totalTodos } ){
    return(
        <h2 className='todo-counter' > Has complentado { completedTodos } de { totalTodos } ToDos</h2>
    );
}

export { TodoCounter };