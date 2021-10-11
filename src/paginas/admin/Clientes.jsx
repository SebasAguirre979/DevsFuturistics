import React from 'react';
import { Link } from 'react-router-dom';

import { useState } from "react";
import Axios from "axios";

const Clientes = () => {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  
 
 const [nuevoNombre, setNuevoNombre] = useState(0);
 const [nuevoEmail, setNuevoEmail] = useState(0);
 const [nuevoPassword, setNuevoPassword] = useState(0);
 const [nuevoRol, setNuevoRol] = useState(0);

  const [usuarioList, setUsuarioList] = useState([]);

  const addUsuario = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      email: email,
      password: password,
      rol: rol,
      
    }).then(() => {
      setUsuarioList([
        ...usuarioList,
        {
      nombre: nombre,
      email: email,
      password: password,
      rol: rol,
        },
      ]);
    });
  };

  const getUsuario = () => {
    Axios.get("http://localhost:3001/show").then((response) => {
      setUsuarioList(response.data);
    });
  };

  const updateUsuario = (id) => {
    Axios.put("http://localhost:3001/update", { nombre: nuevoNombre, email: nuevoEmail, password: nuevoPassword, rol: nuevoRol, id: id }).then(
      (response) => {
        setUsuarioList(
          usuarioList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  nombre: nuevoNombre,
                  email: nuevoEmail,
                  password: nuevoPassword,
                  rol: nuevoRol,
                }
              : val;
          })
        );
      }
    );
  };
  
  const deleteUsuario = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setUsuarioList(
        usuarioList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (


    <div className="containercam container flex justify-center">

      {/* <div class="text-end">
        <Link to="/admin">Atras
        </Link>

      </div> */}

      <div className="m-3 text-center text-3xl font-extrabold text-gray-900">
        <h4>Modificación de usuario</h4>
      </div>


      <div className="formc col-md-4">
        <form className="col-md-12  mt-8 max-w-md flex justify-center" novalidate>
          <div className="col-md-12">
            <label for="username" className="form-label">Nombre Completo</label>
            <input type="text" className="form-control" id="username" placeholder="debes ingresar el nombre" required onChange={(event) => {
            setNombre(event.target.value);
          }}/>

          </div>

          <div className="col-md-12">
            <label for="validationCustomUsername" className="form-label">Email</label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">@</span>
              <input type="email" className="form-control" id="validationCustomUsername"
                aria-describedby="inputGroupPrepend" required onChange={(event) => {
                  setEmail(event.target.value);
                }}/>
            </div>
          </div>
          <div className="col-md-12">
            <label for="validationCustom03" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="validationCustom03" required onChange={(event) => {
            setPassword(event.target.value);
          }}/>
          </div>
          <div className="col-md-9">
            <label for="validationCustom04" className="form-label">Rol</label>
            <select className="form-select" id="validationCustom04" required onChange={(event) => {
            setRol(event.target.value);
          }}>
              <option selected disabled value="">Choose...</option>
              <option>Administrador</option>
              <option>Usuario</option>
            </select>
          </div>
          <div className="contbotones col-md-12 " >
            <button className="btn btn-primary " type="submit" onClick={addUsuario}>Agregar</button>
            <button className="botone btn btn-primary" onClick={getUsuario}>Listar</button>
            <Link to="/admin"><button className="botone btn btn-primary" id="botonCancelar" type="submit">Cancelar</button>
            </Link>

          </div>
        </form>

      </div>
      
        
      <div className="contTabla col-md-7 ">
        <table class="table table-striped">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Rol</th>
            </tr>
          </thead>
          {usuarioList.map((val, key) => {
          return(  
          <tbody>
          
            <tr>
              {/* <th scope="row">1</th> */}
              <td>{val.nombre}</td>
              <td>{val.email}</td>
              <td>{val.password}</td>
              <td>{val.rol}</td>
              <td><button onClick={() => {deleteUsuario(val.id);}}>Borrar
          </button></td>
            </tr>
           <tr>
           <td>
            <input
                  type="text"
                  placeholder="Nuevo nombre..."
                  onChange={(event) => {
                    setNuevoNombre(event.target.value);
                  }}
                />
            </td>
            <td>
            <input
                  type="text"
                  placeholder="Nuevo email..."
                  onChange={(event) => {
                    setNuevoEmail(event.target.value);
                  }}
                />
            </td>
            <td>
            <input
                  type="text"
                  placeholder="Nuevo password..."
                  onChange={(event) => {
                    setNuevoPassword(event.target.value);
                  }}
                />
            </td>
            <td>
            <input
                  type="text"
                  placeholder="Nuevo rol..."
                  onChange={(event) => {
                    setNuevoRol(event.target.value);
                  }}
                />
            </td>
                <button
                  onClick={() => {
                    updateUsuario(val.id);
                  }}
                >
                  {" "}
                  Actualizar
                </button>
              
              
            </tr>

            <tr>
            </tr>
          </tbody>

          

);
      })}

        </table>
      </div>
        

</div>
  );
};

export default Clientes;