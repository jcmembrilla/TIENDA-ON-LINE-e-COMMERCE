//Dependencis
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Components
import Home from './componentes/Home';
import Categoryes from './componentes/ShowCategoryes';
import NoMatch from './componentes/NoMatch';
import NavBar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Combo from "./componentes/Combo";

//Styles
import './App.css'


const App: React.FC = () => {
  return (
    <>
    <Router>
    <NavBar brand={''} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tecnologia" element={<Categoryes category="electronics"/>} />
        <Route path="/muebles" element={<Categoryes category="jewelery"/>} />
        <Route path="/combo" element={<Combo />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    <Footer />
    </Router>
    </>
    
  );
};

export default App;
