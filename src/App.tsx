<<<<<<< HEAD
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
=======

import './App.css'
import Home from './componentes/Home';
import Muebles from './componentes/Muebles';
import Electrodomesticos from './componentes/Electrodomesticos';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './componentes/Navbar';
import NoMatch from './componentes/NoMatch';


const App: React.FC = () => {
  return (
    <Router>
    <NavBar brand={''} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electrodomesticos" element={<Electrodomesticos />} />
        <Route path="/muebles" element={<Muebles />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>

>>>>>>> master
  );
};

export default App;
