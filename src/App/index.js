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
/* const defaultTodos = [
  { text: 'Cortar cebolla',
    completed: false },
  {text: 'Tomar el curso de React',
   completed: false},
  {text: 'Comprar pan',
  completed: true}
]; */


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
    setSearchValue
  } = useTodos();
  
  return (
    <React.Fragment> 
      <TodoHeader>
        <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos} 
          />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
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
    </React.Fragment>
  );
};

export default App;
