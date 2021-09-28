   
import React from 'react';

import { Link } from 'react-router-dom';
import '../estilos/index.css';


const AuthLayout = ({ children }) => {
  return (
    <div className=''>
      <div className=''>
        <Link to='/'>
          Regresar
        </Link>
      </div>
      <div>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;