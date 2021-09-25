import React from "react";
import { Link } from "react-router-dom";
import logo from '../imagenes/logo.png';



const Header = () => {
  return (
    
    <header class="p-3 bg-white text-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <img src={logo} alt='imagen' height="70" />
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" class="nav-link px-2 text-primary">Inicio</Link></li>
          <li><Link to="/Usuarios" class="nav-link px-2 text-primary">Usuarios</Link></li>
          <li><Link to="/Ventas" class="nav-link px-2 text-primary">Ventas</Link></li>
          <li><Link to="/Vendedores" class="nav-link px-2 text-primary">Vendedores</Link></li>
          
        </ul>

       <div class="text-end">
          <button type="button" class="btn-iniciar-sesion btn btn-outline-primary me-2">Login</button>
          <button type="button" class="btn-iniciar-sesion btn btn-outline-primary me-2">Sign-up</button>
        </div>
      </div>
    </div>
  </header>

  );
};  

export default Header;