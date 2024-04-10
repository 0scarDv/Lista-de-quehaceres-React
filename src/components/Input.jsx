import React from 'react'

export const Input = (props) => {
    const {valor, setValor} = props;

    const handleChange = (event) => {
        setValor(event.target.value);
    };

    return (
        <div className='inputTareas'>
            <input type="text" name="entrada" id="" onChange={handleChange} value={valor} />
            <button onClick={props.onClick} >Agregar</button>
        </div>
    )
}
