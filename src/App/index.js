import React from 'react';
import { useTodos } from './useTodos' 
import { TodoHeader } from './components/TodoHeader/';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/createButton";
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm'
import { TodosError } from './components/TodosError';
import { TodosLoading } from './components/TodosLoading';
import { EmptyTodos } from './components/EmptyTodos';
import { ChangeAlert } from './components/ChangeAlert';



function App() {
  const { 
    error, 
    loading, 
    searchedTodos, 
    toggleTodos,
    addTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    sincronizeTodos
  } = useTodos();
  
  return (
    <React.Fragment> 
      <TodoHeader loading={loading}>
        <TodoCounter 
          // loading={loading}
          totalTodos={totalTodos} 
          completedTodos={completedTodos} 
          />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          // loading={loading}
        />
      </TodoHeader>

      <TodoList
        searchText={searchValue}
        error={error} 
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
        /* render={todo => (
          <TodoItem 
            key = {todo.text} 
            text={todo.text}
            completed={todo.completed} 
            onComplete={() => toggleTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)} 
          />
         )} */
      >
        {todo => (
          <TodoItem 
            key = {todo.text} 
            text={todo.text}
            completed={todo.completed} 
            onComplete={() => toggleTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)} 
          />
        )}
      </TodoList>

{/*       <TodoList>
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
      </TodoList> */}

      {!!openModal && (
        <Modal>
          <TodoForm 
            addTodos={addTodos}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
};

export default App;
