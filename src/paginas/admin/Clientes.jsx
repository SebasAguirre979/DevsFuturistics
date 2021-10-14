import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

import { useState } from "react";
import Axios from "axios";

const Clientes = () => {

<<<<<<< HEAD

  const [usuario, setUsuario] = useState({
    nombre: '',
    cedula: '',
    email: '',
    pass: '',
    rol: ''
  });
  const form = useRef(null);
  const [datauser, setDatauser] = useState([]);
  const [datosUsuariosBackend, setDatosUsuariosBackend] = useState([]);
  const [cedulaB, setCedulaB] = useState("");
  const [upduser, setupduser] = useState(false);
  const [eliminar, setEliminar] = useState(false);
  const [userdel, setuserdel] = useState({});
  const [userupdate, setUserupdate] = useState({});
  const [acutualizarusuario, setacutualizarusuario] = useState(false);



  useEffect(() => {
    if (cedulaB !== "") {
      let users = datosUsuariosBackend.find(buscar => buscar.cedula.match(cedulaB));
      users !== undefined ? setDatauser([users]) : setDatauser([])
      console.log(users)
      if (users !== undefined) {
        if (cedulaB === users.cedula) {
          setUsuario({
            nombre: users.nombre,
            cedula: users.cedula,
            email: users.email,
            pass: users.pass,
            rol: users.rol

          })
          toast.info("Usuario encontrado");
        }
      }



    } else {
      setDatauser(datosUsuariosBackend);
    }

  }, [cedulaB])

  const buscarUsuario = (e) => {
    e.preventDefault();
    setCedulaB(e.target.value);
  }

  const deluse = async (e) => {

    console.log("Usuario a elminar", userdel)

    const options = {
      method: 'DELETE',
      url: 'http://localhost:5000/usuarios/deleteuser',
      headers: { 'Content-Type': 'application/json' },
      data: userdel
    };

    await axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

    setEliminar(false)
    actualizarDatosback();
    toast.success("El Usuario  ha sido elminado");
    setCedulaB("");
    setUsuario({
      nombre: "",
      cedula: "",
      email: "",
      pass: "",
      rol: ""

    })
  }

  const upduse = async (e) => {
    console.log("Entro a a ctualizar")
    console.log("Cambios del usuario", userupdate)
    const options = {
      method: 'PATCH',
      url: 'http://localhost:5000/usuarios/update/',
      headers: { 'Content-Type': 'application/json' },
      data: userupdate
    };

    await axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });


    actualizarDatosback();
    toast.success("El Usuario  ha sido actualizado");
    setCedulaB("");
    setUsuario({
      nombre: "",
      cedula: "",
      email: "",
      pass: "",
      rol: ""

    })
  }

  function actualizarDatosback() {
    const options = {
      method: 'GET',
      url: 'http://localhost:5000/usuarios/allusers',
      headers: { 'Content-Type': 'application/json' }
    };

    axios.request(options).then(function (response) {
      setDatosUsuariosBackend(response.data);
      setDatauser(response.data);
    }).catch(function (error) {
      console.error(error);
    });


    console.log("datos de datosusuariosbackend", datosUsuariosBackend);
    console.log(datauser);

  }

  useEffect(() => {
    actualizarDatosback();
  }, [])

  useEffect(async () => {
    console.log("la actulizacion esta:", acutualizarusuario);
    if (acutualizarusuario) {
      console.log("Entro a a ctualizar")
      console.log("Cambios del usuario", userupdate)
      const options = {
        method: 'PATCH',
        url: 'http://localhost:5000/usuarios/update/',
        headers: { 'Content-Type': 'application/json' },
        data: userupdate
      };

      await axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });


      actualizarDatosback();
      toast.success("El Usuario  ha sido actualizado");
      setCedulaB("");
      setUsuario({
        nombre: "",
        cedula: "",
        email: "",
        pass: "",
        rol: ""

      })
    }


  }, [upduser])





  const usuChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
    console.log(e.target.name, "  ", e.target.value);
  }

  const actualizarDatos = () => {

    console.log("Usuario: ", usuario.nombre, "Cedula: ", usuario.cedula);
    toast.success("Usuario actualizado con éxito")
  }


  const agregarUsuario = (e) => {
    e.preventDefault();
    // toast.success("Usuario agregado con éxito")


    // setDatauser([...datauser, {
    //   nombre: usuario.nombre,
    //   cedula: usuario.cedula,
    //   email: usuario.email,
    //   rol: usuario.rol
    // },]);

    actualizarDatosback();

  };



  const actualizarUsuario = (e) => {
    e.preventDefault();
    var userupdate = false;
    const fd = new FormData(form.current)
    const nuevousuario = {};
    fd.forEach((value, key) => {
      nuevousuario[key] = value;
    })

    datosUsuariosBackend.forEach((dato) => {
      if (dato.cedula === nuevousuario["cedulaB"]) {
        console.log("se encuentra el usuario para ser actualizado");
        userupdate = true;
        setUserupdate(nuevousuario);
      }
    })

    if (userupdate) {
      setacutualizarusuario(true);
      setupduser(!upduser)
    } else {
      toast.error("Usuario no registrado");
    }

  };

  const eliminarUsuario = (e) => {
    e.preventDefault();
    var userdelete = false;
    var user = "";
    const fd = new FormData(form.current)
    const nuevousuario = {};
    fd.forEach((value, key) => {
      nuevousuario[key] = value;
    })

    datosUsuariosBackend.forEach((dato) => {
      if (dato.cedula === nuevousuario["cedulaB"]) {
        console.log("se encuentra el usuario para ser borrado");
        userdelete = true;
        setuserdel(nuevousuario);
        // user = dato.nombre;
      }
    })

    if (userdelete) {
      setEliminar(true)
      // toast.success("El Usuario " + user + " ha sido elminado");

    } else {
      toast.error("Usuario no registrado");
    }

  };


  const submitForm = async (e) => {
    e.preventDefault();
    var userregister = true;
    const fd = new FormData(form.current)
    const nuevousuario = {};
    fd.forEach((value, key) => {
      nuevousuario[key] = value;
    })

    console.log("Datos del formulario", nuevousuario);
    console.log("Datos del back", datosUsuariosBackend);
    //Validacion
    datosUsuariosBackend.forEach((dato) => {
      if (dato.email === nuevousuario["email"] || dato.cedula === nuevousuario["cedula"]) {
        console.log("Usuario ya resgistrado");
        toast.error("Usuario ya registrado");
        userregister = false;
      }
    })

    if (userregister) {

      const options = {
        method: 'POST',
        url: 'http://localhost:5000/usuarios/newuser',
        headers: { 'Content-Type': 'application/json' },
        data: nuevousuario
      };

      await axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
      console.log("Usuario agregado con éxito")
      toast.success("Usuario agregado con éxito");
      actualizarDatosback();
      setUsuario({
        nombre: "",
        cedula: "",
        email: "",
        pass: "",
        rol: ""

      })
    }


=======
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
>>>>>>> 3ce08a11db576e8936c986885a7b4f419d9cbb51
  };

  return (


    <div className="containercam container flex justify-center">



      <div className="m-3 text-center text-3xl font-extrabold text-gray-900">
        <h4>Modificación de usuario</h4>
      </div>

      <dialog className=" alert-danger" open={eliminar}>
        <div className='contdialog'>
          <h4 className='text-gray-900 text-2xl font-bold'>
            ¿Está seguro de querer eliminar el usuario?
          </h4>
          <div className='contdialogbot'>
            <button
              onClick={() => deluse()}
              className='btn btn-success mx-auto'
            >
              Sí
            </button>
            <button
              onClick={() => setEliminar(false)}
              className='btn btn-danger mx-auto'
            >
              No
            </button>
          </div>
        </div>
      </dialog>


      <div className="formc col-md-4">


        <form ref={form} onSubmit={submitForm} className="col-md-12  mt-8 max-w-md flex justify-center" novalidate>


          <div className="m-3 text-center text-3xl font-extrabold text-gray-900">
            <h6>Buscar usuarios</h6>
          </div>

          <div className="col-md-12">

            <div className="col-md-12">
              <label for="BuscarCedula" className="form-label">Numero de cedula a buscar</label>
              <input type="text" className="form-control" id="BuscarCedula"
                name='cedulaB'
                value={cedulaB}
                onChange={buscarUsuario}

              />
            </div>

          </div>


          <div className="m-3 text-center text-3xl font-extrabold text-gray-900">
            <h6>Agregar o actualizar usuarios</h6>
          </div>

          <div className="col-md-12">
            <label for="username" className="form-label">Nombre Completo</label>
<<<<<<< HEAD
            <input type="text" className="form-control" id="username"
              placeholder="debes ingresar el nombre" required
              name='nombre'
              value={usuario.nombre}
              onChange={usuChange}
            />
=======
            <input type="text" className="form-control" id="username" placeholder="debes ingresar el nombre" required onChange={(event) => {
            setNombre(event.target.value);
          }}/>
>>>>>>> 3ce08a11db576e8936c986885a7b4f419d9cbb51

          </div>

          <div className="col-md-12">
<<<<<<< HEAD
            <label for="validationCustom02" className="form-label">Numero de cedula</label>
            <input type="text" className="form-control" id="validationCustom02" required
              name='cedula'
              value={usuario.cedula}
              onChange={usuChange}

            />
          </div>
          <div className="col-md-12">
=======
>>>>>>> 3ce08a11db576e8936c986885a7b4f419d9cbb51
            <label for="validationCustomUsername" className="form-label">Email</label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">@</span>
              <input type="email" className="form-control" id="validationCustomUsername"
<<<<<<< HEAD
                aria-describedby="inputGroupPrepend" required
                name='email'
                value={usuario.email}
                onChange={usuChange} />
=======
                aria-describedby="inputGroupPrepend" required onChange={(event) => {
                  setEmail(event.target.value);
                }}/>
>>>>>>> 3ce08a11db576e8936c986885a7b4f419d9cbb51
            </div>
          </div>
          <div className="col-md-12">
            <label for="validationCustom03" className="form-label">Contraseña</label>
<<<<<<< HEAD
            <input type="password" className="form-control" id="validationCustom03" required
              name='pass'
              value={usuario.pass}
              onChange={usuChange}


            />
          </div>
          <div className="col-md-9">
            <label for="validationCustom04" className="form-label">Rol</label>
            <select name='rol' onChange={usuChange} className="form-select" id="validationCustom04" required>
=======
            <input type="password" className="form-control" id="validationCustom03" required onChange={(event) => {
            setPassword(event.target.value);
          }}/>
          </div>
          <div className="col-md-9">
            <label for="validationCustom04" className="form-label">Rol</label>
            <select className="form-select" id="validationCustom04" required onChange={(event) => {
            setRol(event.target.value);
          }}>
>>>>>>> 3ce08a11db576e8936c986885a7b4f419d9cbb51
              <option selected disabled value="">Choose...</option>
              <option value="Administrador">Administrador</option>
              <option value="Usuario">Usuario</option>
            </select>
          </div>
          <div className="contbotones col-md-12 " >
<<<<<<< HEAD
            <button className="btn btn-success mx-auto" type="submit" name='botonAgregar'  >Agregar</button>
            <button className="btn btn-primary mx-auto " type="button" name='botonActualizar' onClick={actualizarUsuario}    >Actualizar</button>
            <button className="btn btn-danger mx-auto"  id="botonEliminar" type="button" onClick={eliminarUsuario} >Eliminar</button>
            
          </div>
          <div className="contbotones2 col-md-12 " >
            <Link to="/admin"><button className="btn btn-dark mx-auto" id="botonCancelar" type="button">Atrás</button>
=======
            <button className="btn btn-primary " type="submit" onClick={addUsuario}>Agregar</button>
            <button className="botone btn btn-primary" onClick={getUsuario}>Listar</button>
            <Link to="/admin"><button className="botone btn btn-primary" id="botonCancelar" type="submit">Cancelar</button>
>>>>>>> 3ce08a11db576e8936c986885a7b4f419d9cbb51
            </Link>

          </div>
        </form>
        <ToastContainer
          position="bottom-center"
          autoClose={5000} />
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
<<<<<<< HEAD
            {
              datauser.map((usr) => {
                return (
                  <tr>
                    <td>{usr.nombre}</td>
                    <td>{usr.cedula}</td>
                    <td>{usr.email}</td>
                    <td>{usr.rol}</td>
                  </tr>
                )

              }
              )
            }
=======
          
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
>>>>>>> 3ce08a11db576e8936c986885a7b4f419d9cbb51
          </tbody>

          

);
      })}

        </table>
      </div>
<<<<<<< HEAD




    </div>

=======
        
>>>>>>> 3ce08a11db576e8936c986885a7b4f419d9cbb51

</div>
  );
};

export default Clientes;