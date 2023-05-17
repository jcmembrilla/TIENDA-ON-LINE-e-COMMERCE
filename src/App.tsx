
import './App.css'
import Home from './componentes/Home';
import Muebles from './componentes/Muebles';
import Electrodomesticos from './componentes/Electrodomesticos';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './componentes/Navbar';
import NoMatch from './componentes/NoMatch';
import Footer from './componentes/Footer';


const App: React.FC = () => {
  return (
    <>
    <Router>
    <NavBar brand={''} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electrodomesticos" element={<Electrodomesticos />} />
        <Route path="/muebles" element={<Muebles />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    <Footer />
    </Router>
    </>
    

  );
};

export default App;

