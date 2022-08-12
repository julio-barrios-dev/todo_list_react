import React from 'react';
import './todoForm.css';

function TodoForm({
  addTodos,
  setOpenModal
}) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault(); //Evita que la pagina se recargue
    if (newTodoValue !== '') {
      addTodos(newTodoValue);
      setOpenModal(false);
      return null;
    }
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}  >
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Reunión a las 4:00"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };