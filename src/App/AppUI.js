import React from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/createButton";

function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  toggleTodos,
  deleteTodos
}) {
  return (
    <React.Fragment> 
    <TodoCounter
      total={totalTodos}
      completed={completedTodos}
    />
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />

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
   <CreateTodoButton />
</React.Fragment> 
  );
}

export { AppUI };


