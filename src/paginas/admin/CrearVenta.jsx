import React from 'react';
import { Link } from 'react-router-dom';
const CrearVenta = () => {
    return <div>
      
  
  <div className="container">
  <Link to='/admin/ventas/CrearVenta'>  
  <button className="btn btn-outline-primary mt-3 mb-3 CrearVenta">Crear nueva venta</button>
  </Link>
  <Link to='/admin'>
  <button className="btn btn-outline-primary mt-3 mb-3 Regresar" > Regresar</button>
  </Link >
  <br />
  <br />
  
  
  
  <br />
  <br />
  <br />
  
  </div>
    </div>;
  };
export default CrearVenta ;

