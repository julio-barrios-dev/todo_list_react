import React from "react";
// import './App.css';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButtom } from "./createButtom";

const todos = [
  { text: 'Cortar cebolla',
    complete: false },
  {text: 'Tomar ell curso de React',
   complete: false},
  {text: 'Comprar pan',
  complete: false}
];

function App() {
  return (
     <React.Fragment> 
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          {todos.map(todo => (<TodoItem key =
            {todo.text} text={todo.text} />
          ))}
        </TodoList>
       <CreateTodoButtom />
    </React.Fragment> 
  );
}

export default App;
