import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoButton } from "./TodoButton";
// import './App.css';

function useLocalStorage( itemName, initialValue ){

  const [ loading, setILoading ] = React.useState( true );
  const [ error, setError ] = React.useState( false );
  const [ item, setItem ] = React.useState( initialValue );

  React.useEffect( () => {
    setTimeout( () => {
      try {
        const localStorageItem = localStorage.getItem( itemName );
        let parsedItem;
        
        if (!localStorageItem){
          parsedItem = localStorage.setItem( itemName , JSON.stringify( initialValue ) );
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse( localStorageItem );
        }
        setItem(parsedItem);
        setILoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, []);

  const saveItem = ( newItem ) => {
    try {
      const stringifiedItem = JSON.stringify( newItem );
      localStorage.setItem( itemName , stringifiedItem );
      setItem( newItem );
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error
  };

}

function App( ) {

  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage( 'TODOS_V1', [] );
  const [ searchValue, setSearchValue ] = React.useState('');

  const completedTodos = todos.filter( todo => todo.completed ).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if( !searchValue.length >= 1  ){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter( todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const completeTodo = ( text ) =>{
    const todoIndex = todos.findIndex( todo => todo.text === text );
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = ( text ) => {
    const newTodos = todos.filter( todo => todo.text !== text );
    saveTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter 
        completedTodos = { completedTodos }
        totalTodos = { totalTodos }
      />

      <TodoSearch 
        searchValue = { searchValue }
        setSearchValue = { setSearchValue }
      />

      <TodoList>
        { error && <p>Hubo un error, favor de contactar al servicio de soporte de la NASA...</p> }
        { loading && <p>Cargando...</p> }
        { (!loading && !searchedTodos.length  && !todos.length ) && <p>Crea tu primer tarea.</p> }
        { (!loading && !searchedTodos.length && todos.length > 0 ) && <p>Tu búsqueda no arrojó resultados.</p> }

        { searchedTodos.map( todo => (
            <TodoItem 
            key={ todo.text } 
            text={ todo.text } 
            completed={ todo.completed }
            onComplete={ () => completeTodo( todo.text ) }
            onDelete={ () => deleteTodo( todo.text ) }
            />
        ))}
      </TodoList>

      <TodoButton />

    </React.Fragment>
  );
}

export default App;
