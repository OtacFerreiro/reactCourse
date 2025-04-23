import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import NavBar from './components/Navbar';

import Home from "./pages/Home";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Product from "./pages/Product";
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <h1>Projeto React - Context API</h1>

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} /> 
          <Route path="/clients" element={<Clients />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
