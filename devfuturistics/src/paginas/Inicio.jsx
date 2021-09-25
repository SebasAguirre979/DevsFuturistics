import "../estilos/index.css";

function Inicio() {
  return (
    
  <main class="form-signin">
  <form>
    <br />
    <h1 class="h3 mb-3 fw-normal">Iniciar sesion</h1>
    <br />
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Recuerdame
      </label>
    </div>
    <button class="w-100 btn-lg btn-iniciar-sesion" type="submit">Iniciar Sesion</button>
    <br />
    <br />
    <br />
    <br /> 
     
  </form>
</main>

  );
}

export default Inicio;