//Styles
import './App.css'
//Components
import Home from './componentes/Home';
import Muebles from './componentes/Muebles';
import Electrodomesticos from './componentes/Electrodomesticos';
import NoMatch from './componentes/NoMatch';
//Dependencis
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './componentes/Navbar';


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

  );
};

export default App;

