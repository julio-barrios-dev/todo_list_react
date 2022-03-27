import React from "react";
import './styles/TodoSearch.css'

function TodoSearch(){
    const [searchValue, setSearhValue ] = React.useState('');

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearhValue(event.target.value);
    };

    return [
        <input 
            className="TodoSearch" 
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}    
        />,
        <p>{searchValue}</p>
        
    ];
}

export {TodoSearch};