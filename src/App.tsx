//Dependencis
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Components
import Home from './componentes/Home';
import Muebles from './componentes/Muebles';
import Tecnologia from './componentes/Tecnologia';
import NoMatch from './componentes/NoMatch';
import NavBar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Combo from "./componentes/Combo/Combo";

//Styles
import './App.css'


const App: React.FC = () => {
  return (
    <>
    <Router>
    <NavBar brand={''} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/muebles" element={<Muebles />} />
        <Route path="/combo" element={<Combo />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    <Footer />
    </Router>
    </>
    
  );
};

export default App;
