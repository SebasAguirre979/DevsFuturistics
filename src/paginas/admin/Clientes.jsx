import React from 'react';

const Clientes = () => {
  return (
    
    
    <div className="containercam container flex justify-center">

      <div className="m-3 text-center text-3xl font-extrabold text-gray-900">
        <h4>Modificación de usuario</h4>
      </div>
       

      <div className="formc col-md-4">
        <form className="col-md-12  mt-8 max-w-md flex justify-center" novalidate>
          <div className="col-md-12">
            <label for="username" className="form-label">Nombre Completo</label>
            <input type="text" className="form-control" id="username" placeholder="debes ingresar el nombre" required />

          </div>

          <div className="col-md-12">
            <label for="validationCustom02" className="form-label">Numero de cedula</label>
            <input type="text" className="form-control" id="validationCustom02" required />
          </div>
          <div className="col-md-12">
            <label for="validationCustomUsername" className="form-label">Email</label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">@</span>
              <input type="email" className="form-control" id="validationCustomUsername"
                aria-describedby="inputGroupPrepend" required />
            </div>
          </div>
          <div className="col-md-12">
            <label for="validationCustom03" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="validationCustom03" required />
          </div>
          <div className="col-md-9">
            <label for="validationCustom04" className="form-label">Rol</label>
            <select className="form-select" id="validationCustom04" required>
              <option selected disabled value="">Choose...</option>
              <option>Administrador</option>
              <option>Usuario</option>
            </select>
          </div>
          <div className="contbotones col-md-12 " >
            <button className="btn btn-primary " type="submit">Actualizar</button>
            <button className="botone btn btn-primary" id="botonEliminar" type="submit">Eliminar</button>
            <button className="botone btn btn-primary" id="botonCancelar" type="submit">Cancelar</button>
          </div>
        </form>

      </div>

      <div className="contTabla col-md-7 ">
        <table class="table table-striped">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Nombre</th>
              <th scope="col">Cedula</th>
              <th scope="col">Emil</th>
              <th scope="col">Rol</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <th scope="row">1</th> */}
              <td>Camilo Andrés Acevedo</td>
              <td>1234567890</td>
              <td>cacevedol@gmail.com</td>
              <td>Administrador</td>
            </tr>
            <tr>
              {/* <th scope="row">2</th> */}
              <td>Jacob</td>
              <td>78945621352</td>
              <td>ddddcdcd@fddat</td>
              <td>Usuario</td>
            </tr>
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


  );
};

export default Clientes;