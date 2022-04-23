import React from 'react';
import { useStorageListener } from './useStorageListener';
import './changeAlert.css';

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div className='ChangeAlert-bg'>
        <div className='ChangeAlert-container'>
        <p>Hubo cambios en la lista de TODOs!</p>
        <p>¿Quieres sincronizar tu lista de TODOs?</p>
        <button
          className='ChangeAlert-container-button--reload'
          onClick={toggleShow}
        >
          Volver a cargar la información
        </button>
      </div>
      </div>
    );
  }
  return null;
}

export { ChangeAlert };