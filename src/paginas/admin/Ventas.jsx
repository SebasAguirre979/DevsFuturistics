import React from 'react';
import TablaVentas from '../../componentes/TablaVentas';
import { Link } from 'react-router-dom';

const Ventas = () => {
  return <div>
    

<div className="container">
<button className="btn btn-outline-primary mt-3 mb-3 CrearVenta">Crear nueva venta</button>
<Link to='/'>
<button className="btn btn-outline-primary mt-3 mb-3 Regresar" > Regresar</button>
</Link>
<TablaVentas/>
<br />
<br />



<br />
<br />
<br />

</div>
  </div>;
};

export default Ventas; 
