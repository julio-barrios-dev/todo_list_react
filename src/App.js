import React from "react";
// import './App.css';
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/createButton";

const todos = [
  { text: 'Cortar cebolla',
    completed: false },
  {text: 'Tomar el curso de React',
   completed: true},
  {text: 'Comprar pan',
  completed: false}
];

function App() {
  return (
     <React.Fragment> 
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          {todos.map(todo => (<TodoItem 
            key = {todo.text} 
            text={todo.text}
            completed={todo.completed} 
            />
          ))}
        </TodoList>
       <CreateTodoButton />
    </React.Fragment> 
  );
}

export default App;
