import React from "react";

import { TodoContext } from "./components/TodoContext/index";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/createButton";
import { Modal } from './components/Modal';

function AppUI() {
  const { 
    error, 
    loading, 
    searchedTodos, 
    toggleTodos,
    deleteTodos,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <React.Fragment> 
      <TodoCounter/>
      <TodoSearch/>

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

      {!!openModal && (
        <Modal>
          <p>{searchedTodos[0]?.text}</p>
        </Modal>
      )}
    
   <CreateTodoButton
    setOpenModal={setOpenModal}
    openModal={openModal}
    />
</React.Fragment> 
  );
}

export { AppUI };


