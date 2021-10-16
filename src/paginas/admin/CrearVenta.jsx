
import '../../estilos/index.css'
import React from 'react';
import { Link } from 'react-router-dom';
    const CrearVenta = () => {
    return <div>
      
  
  <div className="container">

  <Link to='/admin/ventas'>
  <button className="btn btn-outline-primary mt-3 mb-3 Regresar" > Regresar</button>
  </Link >

  <br />
  <br />
            <form className="">

                <div className="col-md-4">
                    <label for="validationDefault01" className="form-label">Venta #</label>
                    <input type="number" className="form-control" >
                    </input>          
                </div>               
                <div className="col-md-4">
                    <label for="validationDefault01" className="form-label">Nombre</label>
                    <input type="text" className="form-control" >
                    </input>          
                </div>
                <div className="col-md-4">
                    <label for="number" className="form-label">Cedula</label>
                    <input type="number" className="form-control" >
                    </input>          
                </div>
                <div className="col-md-4">
                    <label for="validationDefault01" className="form-label">Fecha</label>
                    <input type="date" className="form-control" >
                    </input>          
                </div>
         
                <div className="col-md-4">
                <label for="validationCustom04" className="form-label">Productos</label>
                <select className="form-select" id="validationCustom04" required onChange={(event) => {
                    }}>

                    <option selected disabled value="">Agregar...</option>
                    <option>p1</option>
                    <option>p2</option>
                    </select>
                </div>
                    
                <button type='button' className="btn btn-outline-primary mt-3 mb-3 CrearVenta">Guardar</button>

            </form>


    <div className="m-3 text-center text-3xl font-extrabold text-gray-1500">
        <h4>Info Venta</h4>
        <div className="containercam container flex justify-right">

      </div>
            <div className="contTabla col-md-7 ">
                <table class="table table-striped">
                <thead>
                    <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col">cantidad</th>
                    <th scope="col">productos</th>
                    <th scope="col">Valor und</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                </table>
            </div>
            </div>
  <br />
  <br />
  <br />
  

    </div>
    </div>;
    };

export default CrearVenta ;

