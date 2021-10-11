import React from 'react';
import {useState} from 'react';
import { useHistory } from 'react-router';
import { GoogleLogin } from 'react-google-login';


const Login = () => {

const responseGoogle = (response) => {
    console.log(response);
  }

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
  

  

      <GoogleLogin
    clientId="140250298943-84vi56npac5hngnuluabt4ktdq3eeprf.apps.googleusercontent.com"
    buttonText="Inicia con Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    
  />,
 
 </div>
       
   
</main>

);
};
export default Login;