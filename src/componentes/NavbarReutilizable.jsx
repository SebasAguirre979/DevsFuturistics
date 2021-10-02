import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';

const Navbar = () => {
  var mostrar=true;
  return (
    <header class="p-3 bg-white text-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <img src={logo} alt='imagen' height="70" />
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
         <li><Link to="/" class="nav-link px-2 text-primary">Inicio</Link></li>
          <li><Link to="/Quienes_somos" class="nav-link px-2 text-primary">Quienes somos</Link></li>
          <li><Link to="/Contactenos" className={mostrar ? "nav-link px-2 text-primary": "d-none"}>Contactenos</Link></li>
          
          
        </ul>

       <div class="text-end">
          
          
        </div>
      </div>
    </div>
  </header>
  );
};

export default Navbar;