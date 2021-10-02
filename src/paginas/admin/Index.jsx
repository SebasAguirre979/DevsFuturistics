import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='flex w-screen h-screen'>
      <div class="text-end">
        <Link to="/admin/usuarios"><button type="button" class="btn-iniciar-sesion btn btn-outline-primary me-2">Modificar Usuarios</button>
        </Link>

      </div>
      <div>Contenido</div>
    </div>



  );
};

export default Admin;