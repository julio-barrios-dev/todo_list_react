import React from "react";
import { AppUI } from "./AppUI.js";

/* const defaultTodos = [
  { text: 'Cortar cebolla',
    completed: false },
  {text: 'Tomar el curso de React',
   completed: false},
  {text: 'Comprar pan',
  completed: true}
]; */

//Custon hooks para Local Storage

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect( () => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
    
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify( initialValue));
          parsedItem =  initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem);
        setLoading(false);
        console.log("Hola");

      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item, 
    saveItem,
    loading,
    error
  }

}

function App() {
  
  const {
    item :todos, 
    saveItem :saveTodos, 
    loading,
    error } = useLocalStorage('TODOS_V1', []);
     

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const toggleTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
    };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    };

  return (
    <AppUI
    error={error}
    loading={loading}
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    toggleTodos={toggleTodos}
    deleteTodos={deleteTodos}
     />
  );
};

export default App;
