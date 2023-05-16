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
    </div>
  );
};

export default App;
