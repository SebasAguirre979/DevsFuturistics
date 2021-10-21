import React from 'react';
import logo from '../imagenes/logo.png';
import { Link } from 'react-router-dom';


import '../estilos/index.css';


const Navbar = () => {
  

    
//    window.sessionStorage.removeItem("access_token");
//     window.sessionStorage.removeItem("nama");
//     this.setState(state => ({
//         isLogined: false,
//         token: ''
//     }),
//     console.log(response)
 //    );
 

  
  return (
    <header class="p-3 bg-white text-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <img src={logo} alt='imagen' height="70" />
          <div className="me-2 labelUsuario">
          <label class=" me-2"> usuario </label> {/*Por Corregir para que sea responsive*/}
          </div>
          <div className="botonLogout">

                 


          <Link to="/"> 
              <button type="button" class="btn-iniciar-sesion btn btn-outline-primary me-2"> 
              Logout</button>
          </Link>
             

          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;