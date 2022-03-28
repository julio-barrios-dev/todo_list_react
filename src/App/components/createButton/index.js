import react from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){
    const oncClickBUtton = (msg) => {
        alert(msg)
    }
    return(
        <button 
            className="CreateTodoButton"
            onClick={() => oncClickBUtton("Aqui se deberia abrir un modal")}
        >
            +
        </button>
    );
}

export { CreateTodoButton };