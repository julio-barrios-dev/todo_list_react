import React from "react";

import { TodoContext } from "./components/TodoContext/index";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/createButton";
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm'
import { TodosError } from './components/TodosError';
import { TodosLoading } from './components/TodosLoading';
import { EmptyTodos } from './components/EmptyTodos';

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
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
  
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
          <TodoForm />
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


