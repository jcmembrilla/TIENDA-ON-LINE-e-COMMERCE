//Styles
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./componentes/Navbar";
import Electrodomesticos from "./componentes/Electrodomesticos";
import Muebles from "./componentes/Muebles";
import Carousel from './componentes/carousel/Carousel';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <NavBar brand={''} />
        <Routes>
          <Route path="/electrodomesticos" element={<Electrodomesticos />} />
          <Route path="/muebles" element={<Muebles />} />
        </Routes>
      </Router>
      <Carousel/>
      <div className='container_combos d-flex justify-content-center bg-danger'>
        <div className="panel1 bg-primary">
            <h2 className="text-center">Combos interiores</h2>
            <div className="grilla row">
              <div className="item m-3 bg-warning">cocina</div>
              <div className="item m-3 bg-secondary">living</div>
              <div className="item m-3">habitaciones</div>
              <div className="item m-3 bg-warning">Oficinas</div>
            </div>
        </div>
        <div className='panel2 bg-warning'>
          <h2 className="text-center">Combos exterior</h2>
          <div className='grilla2 row'>
            <div className='item m-3 bg-dark'>Jardineria</div>
            <div className='item m-3 bg-secondary'>Recreacion</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
