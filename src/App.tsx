//Styles
import './App.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./componentes/Navbar";
import Electrodomesticos from "./componentes/Electrodomesticos";
import Muebles from "./componentes/Muebles";

const App: React.FC = () => {
  return (
    <Router>
    <NavBar brand={''} />
    <Routes>
      <Route path="/electrodomesticos" element={<Electrodomesticos />} />
      <Route path="/muebles" element={<Muebles />} />
    </Routes>
  </Router>
  );
};

export default App;

