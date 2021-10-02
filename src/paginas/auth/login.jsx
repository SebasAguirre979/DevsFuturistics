import React from 'react';
import google from '../../imagenes/google.svg';
import {useState} from 'react';
import { useHistory } from 'react-router';


const Login = () => {

let history = useHistory();

//estos son los states
const [usuario,setUsuario] = useState({
  email:'',
  password:''
});

//db
const [dbUsuarios] = useState([
     
      {email:'devs@gmail.com',pass:'123'}
  ]
)

//error
const [error,setError] = useState('')

//funciones
const usuChange = (e) =>{
  setUsuario({
      ...usuario,
      [e.target.name] : e.target.value
  })
}

const sendForm = () => {
  
  dbUsuarios.forEach(function(elem) {
      if(elem.email === usuario.email && elem.pass === usuario.password){
         history.push("/admin")
      }
  })

setError('Credenciales Incorrectas')

}


return (
    
<main class="form-signin">
  <form>
    <br />
    <h1 class="h3 mb-3 fw-normal">Iniciar sesion</h1>
    <br />
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name='email'
                        value={usuario.email}
                        onChange={usuChange}/>
      <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name='password'
                        value={usuario.password}
                        onChange={usuChange}/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Recuerdame
      </label>
    </div>
    <button class="w-100 btn-lg btn-iniciar-sesion" onClick={sendForm} type="button">Iniciar Sesion</button>
    {
      error !== '' &&
      <div className="alert alert-danger" role="alert">
        {error}
      </div>

    }
     
  </form>

  <div className='flex items-center justify-center'>
    <h2 className='my-4 text-center text-sm font-extrabold text-gray-900'>O</h2>
  </div>

  <div className='max-w-md w-full'>
    <button type='submit' className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
      <div className='flex items-center justify-start'>
        <img src={google} width="40" height="40" alt="arriba"/>
        <span className='mx-4'>Continúa con Google</span>
      </div>
    </button>
  </div>
</main>

);
};
export default Login;