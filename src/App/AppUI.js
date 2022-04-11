import React from "react";

import { TodoContext } from "./components/TodoContext/index";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/createButton";

function AppUI() {
  return (
    <React.Fragment> 
    <TodoCounter/>
    <TodoSearch/>

    <TodoContext.Consumer>
      {({ error, 
          loading, 
          searchedTodos, 
          toggleTodos,
          deleteTodos}) => (
        <TodoList>
        {error && <p>Hubo un error!</p>}
        {loading && <p>Estamos cargando, no sedesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>!Crea tu primer TODO</p>}
  
        {searchedTodos.map(todo => (<TodoItem 
          key = {todo.text} 
          text={todo.text}
          completed={todo.completed} 
          onComplete={() => toggleTodos(todo.text)}
          onDelete={() => deleteTodos(todo.text)}
  
          />
        ))}
      </TodoList>
      )}
    </TodoContext.Consumer>
    
   <CreateTodoButton />
</React.Fragment> 
  );
}

export { AppUI };


