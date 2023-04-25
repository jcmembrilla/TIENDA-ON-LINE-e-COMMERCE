import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

const App: React.FC = () => {
  return (
    <Router>
    <NavBar brand={''} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/electrodomesticos" element={<Electrodomesticos />} />
      <Route path="/muebles" element={<Muebles />} />
    </Routes>
  </Router>
  );
};

export default App;

