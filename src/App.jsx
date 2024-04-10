import { useState } from 'react'

import './App.css'
import { Input } from './components/Input'
import { Lista } from './components/Lista'

function App() {
  const [valor, setValor] = useState('')
  const [listaDeQuehaceres, setListaDeQuehaceres] = useState(['Api de bromas', 'Aki Waker', 'Mongo Db']);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    //manejara del estado del check de cada item
    setChecked(!checked);
  };


  const agregarTarea = (valor) => {

    setListaDeQuehaceres([...listaDeQuehaceres, valor])
    setValor('');
  }

  const eliminarTarea = (item) => {
    setListaDeQuehaceres(listaDeQuehaceres.filter(tarea => tarea !== item));
  };

  return (
    <>

      <Input  valor={valor} setValor={setValor} onClick={() => agregarTarea(valor)}  />


      {listaDeQuehaceres.map((item, index) => (
        <Lista  key={index} nombrePendiente={item} onDelete={eliminarTarea} ></Lista>

      ))
    
      }

    </> 
  )
}

export default App
