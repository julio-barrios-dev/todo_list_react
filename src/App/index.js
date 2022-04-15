import React from "react";
import { TodoProvider } from './components/TodoContext/index'
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



function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
};

export default App;
