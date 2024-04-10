import React, { useState } from 'react'

export const Lista = (props) => {
    const [estadoTarea, setestadoTarea] = useState(false)
    const pendiente = props.nombrePendiente;

    const handleDelete = () => {
        props.onDelete(pendiente);
    }

    const setEstado = () => {
        setestadoTarea(!estadoTarea);
    }

    console.log(estadoTarea);
    return (
        <div className='contenedorTareas'>

            <label className='tareaIndividual' style={{ textDecoration: estadoTarea ? 'line-through' : 'none' }}  >
                <input type="checkbox" onChange={setEstado} /> {pendiente}
            </label>
            <button onClick={handleDelete}>Delete</button>


        </div >



    )
}
