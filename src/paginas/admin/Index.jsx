import React from 'react';
import { Link } from 'react-router-dom';
import RegistrarPNG from '../../imagenes/Registrar.png';


const Admin = () => {
  
  return (
    <div className='flex w-screen h-screen'>
      <div class="text-center">

        <Link to="/admin/ventas"><button type="button" class="btn-iniciar-sesion btn btn-outline-primary me-2"><img src={RegistrarPNG} alt="imagen" height="70" />Registrar Ventas</button>
        </Link>
        <Link to="/admin/usuarios"><button type="button" class="btn-iniciar-sesion btn btn-outline-primary me-2"><img src={RegistrarPNG} alt="imagen" height="70" />Modificar Usuarios</button>
        </Link>
        <Link to="/admin/productos"><button type="button" class="btn-iniciar-sesion btn btn-outline-primary me-2"><img src={RegistrarPNG} alt="imagen" height="70" />Registrar Productos</button>
        </Link>


      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </div>

  

  );
};

export default Admin;