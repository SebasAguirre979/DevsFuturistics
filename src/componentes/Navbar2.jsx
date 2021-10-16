import React from 'react';
import logo from '../imagenes/logo.png';

import '../estilos/index.css';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user, logout } = useAuth0();



  const cerrarSesion = () => {
    logout({ returnTo: window.location.origin });
    localStorage.setItem("token", null);
  };
  return (
    <header class="p-3 bg-white text-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <img src={logo} alt='imagen' height="70" />
          <div className="me-2 labelUsuario">
          <label class=" me-2"> {user.name} </label> {/*Por Corregir para que sea responsive*/}
          </div>
          <div className="botonLogout">
            
              <button type="button" class="btn-iniciar-sesion btn btn-outline-primary me-2" onClick={() => 
               cerrarSesion()} >Logout</button>
         {/*       logout({ returnTo: window.location.origin })}        */}
             

          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;