import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';
import Index from './paginas/Index';
import Admin from './paginas/admin/Index';
import Ventas from './paginas/admin/Ventas';
import Login from './paginas/auth/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registro from './paginas/auth/Registro';
import AuthLayout from './layouts/AuthLayout';
import Clientes from './paginas/admin/Clientes'


function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path={['/admin', '/admin/ventas', '/admin/usuarios']}>
            <PrivateLayout>
              <Switch>
                <Route path='/admin/ventas' exact>
                  <Ventas />
                </Route>
                <Route path='/admin' exact>
                  <Admin />
                </Route>
                <Route path='/admin/usuarios' exact>
                  <Clientes />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/login', '/registro']}>
            <AuthLayout>
              <Switch>
                <Route path='/login'>
                  <Login />
                </Route>
                <Route path='/registro'>
                  <Registro />
                </Route>
              </Switch>
            </AuthLayout>
          </Route>
          <Route path={['/']}>
            <PublicLayout>

              <Route path='/'>
                <Index />
              </Route>

            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;