import React, {useState} from 'react'
import '../../estilos/index.css'
import { Link } from 'react-router-dom';


const Productos = () => {
    
    //Estos son los estados
    const [producto,setProducto] = useState({
        descripcion:'',
        valor:''
    });

    //db provisional
    const [dbProductos] = useState([
        {descripcion:'Ladrillos', valor:'20000'}
    ])

    //funciones
    const producChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
        
    }

    const enviarForm = () =>{
        dbProductos.forEach(function(elem){
            console.log('registro');
            console.log(producto);
        })

    }

    const actualizarForm = () =>{
        dbProductos.forEach(function(elem){
            console.log('actualizar');
            console.log(producto);
        })

    }

    const eliminarForm = () =>{
        dbProductos.forEach(function(elem){
            console.log('eliminar');
            console.log(producto);
        })

    }

    
    return (
        <div>
            <div className="containercam container flex justify-center">

                <div className="m-3 text-center text-3xl font-extrabold text-gray-900">
                    <h4>Modificación de productos</h4>
                </div>


                <div className="formc col-md-4">
                    
                    <form id="recogidaForm" className="col-md-12  mt-8 max-w-md flex justify-center" novalidate>

                        <div className="col-md-12">
                            <label>Descripción</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="descripcion" 
                            placeholder="Ingresar descripcion breve"
                            name='descripcion'
                            value={producto.descripcion}
                            onChange={producChange} />

                        </div>

                        <div className="col-md-12">
                            <label>Valor Unitario</label>
                            <input 
                            type="number" 
                            className="form-control" 
                            id="valor" 
                            placeholder="Ingresar solo numeros"
                            name='valor'
                            value={producto.valor}
                            onChange={producChange}  />
                        </div>

                        <div className="col-md-12">
                            <label>Estado</label>
                            <select className="form-select" id="estadoinicial" >
                                <option selected disabled value="">Elegir</option>
                                <option>Disponible</option>
                                <option>No Disponible</option>
                            </select>
                        </div>

                        <div className="contbotones col-md-12 " >
                            <button onClick={enviarForm} className="botone btn btn-primary" id="botonAgregarPro" type="submit">Agregar</button>
                            <button onClick={actualizarForm} className="botone btn btn-primary" id="botonActualizarPro" type="submit">Actualizar</button>
                            <button onClick={eliminarForm} className="botone btn btn-primary" id="botonEliminarPro" type="submit">Eliminar</button>
                            
                            <div className="botonCancelarPro">
                            <div className="contbotones col ">
                            <Link to='/admin'><button className="btn btn-primary" id="botonAtrasPro" type="button">Cancelar</button></Link>
                            </div>
                            </div>
                        </div>

                    </form>

                </div>


                <div className="contTabla col-md-7 ">
                    <table id="inventarioProductos" class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ladrillos</td>
                                <td>2000</td>
                                <td>Disponible</td>
                            </tr>
                            <tr>
                                <td>Varillas</td>
                                <td>10000</td>
                                <td>No Disponible</td>
                            </tr>
                            <tr>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Productos
