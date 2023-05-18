import React from 'react'

const FormCombo = () => {
  return (
    <div>
        <div className="container col-12">
        <div className="col-12">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <form>
              <div className="col-6">
                <label for="inputDinero" className="form-label">Ingresar dinero:</label>
                <input type="text" className="form-control" id="inputDinero" placeholder="Ingrese el monto"></input>
              </div>
              <div className="col-6">
                <label for="inputCantidad" className="form-label">Cantidad de productos:</label>
                <input type="number" className="form-control" id="inputCantidad" placeholder="Ingrese la cantidad"></input>
              </div>
            </form>
            <div className="col-6">
              <button className="btn btn-primary btn-lg">Armar</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default FormCombo