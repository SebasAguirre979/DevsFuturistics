import React from 'react';
import Footer from '../../componentes/Footer';
import NavbarReutilizable from '../../componentes/NavbarReutilizable';
import TablaVentas from '../../componentes/TablaVentas';

const Ventas = () => {
  return <div>
    
<NavbarReutilizable/>
<div className="container">
<button className="btn btn-outline-primary mt-3 mb-3">Crear nueva venta</button>

<TablaVentas/>
<br />
<br />



<br />
<br />
<br />
<Footer/>
</div>
  </div>;
};

export default Ventas;  