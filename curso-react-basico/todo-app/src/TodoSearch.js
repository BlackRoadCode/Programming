
import './TodoSearch.css';

function TodoSearch( { searchValue, setSearchValue } ){

    const onChangeSearch = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <input 
            className='todo-input' 
            placeholder="nada todavía"
            value={ searchValue }
            onChange={ onChangeSearch }
        />)
}

export { TodoSearch };