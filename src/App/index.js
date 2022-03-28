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

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if(!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(parsedTodos);

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

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };

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
