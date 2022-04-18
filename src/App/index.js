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

function App() {
  const [state, setState] = React.useState('Estado compartido');

  return (
      <React.Fragment>
        <TodoHeader>
          <TodoCounter/>
          <TodoSearch/>
        </TodoHeader>

        <TodoList>
          <TodoItem state={state} />
        </TodoList>
      </React.Fragment>
  )  
}
function TodoHeader({ children }) {
  return (
    <header>
      {children}
    </header>
  )
}
function TodoList({ children }) {
  return (
    <section className="TodoList-container">
      {children}
    </section>
  )
}
function TodoCounter() {

  return (
    <p>TodoCounter</p>
  )
}
function TodoSearch() {
  return (
    <p>TodoSearch</p>
  )
}
function TodoItem({ state }) {
  return (
    <p>TodoItem {state}</p>
  )
}


/* function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}; */

export default App;
