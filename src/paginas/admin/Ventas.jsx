import React from 'react';
import TablaVentas from '../../componentes/TablaVentas';
import { Link } from 'react-router-dom';

const Ventas = () => {
  return <div>


    <div className="container">

      <div>
        <h1>MÓDULO EN CONSTRUCIÓN...</h1>
      </div>
      <Link to='/admin/ventas/CrearVenta'>
        <button className="btn btn-outline-primary mt-3 mb-3 CrearVenta">Crear nueva venta</button>
      </Link>
      <Link to='/admin'>
        <button className="btn btn-outline-primary mt-3 mb-3 Regresar" > Regresar</button>
      </Link >

      <TablaVentas />

      <br />
      <br />



      <br />
      <br />
      <br />

    </div>
  </div>;
};

export default Ventas;