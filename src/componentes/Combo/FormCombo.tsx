import React, { useState } from 'react'
import Carousel from '../carousel/Carousel'
const FormCombo = () => {
  
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [cantidadValue, setCantidadValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setCantidadValue(event.target.value);
  };

  const handleClick = () => {
    if(mostrarComponente==false){
      setMostrarComponente(true);

    }else{
      setMostrarComponente(false);
    }
  };

  return (
    <div>
        <div className="container col-12">
        <div className="col-12">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <form>
              <div className="col-6">
                <label for="inputDinero" className="form-label">Ingresar dinero:</label>
                <input value={inputValue} onChange={handleChange} type="text" className="form-control" id="inputDinero" placeholder="Ingrese el monto"></input>
              </div>
              <div className="col-6">
                <label for="inputCantidad" className="form-label">Cantidad de productos:</label>
                <input value={cantidadValue} onChange={handleChange} type="number" className="form-control" id="inputCantidad" placeholder="Ingrese la cantidad"></input>
              </div>
            </form>
            <div className="col-6">
              <button onClick={handleClick} className="btn btn-primary btn-lg">Armar</button>
              {mostrarComponente && "tarjetas"}
            </div>
            <p>CANTIDAD DE PRODUCTOS ES: {inputValue}</p>
          </div>
        </div>
      </div>



    </div>
  )
}

export default FormCombo