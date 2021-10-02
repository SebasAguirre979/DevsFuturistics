import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';
import Index from './paginas/Index';
import Admin from './paginas/admin/Index';
import Login from './paginas/auth/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import Clientes from './paginas/admin/Clientes';
import Ventas from './paginas/admin/Ventas';
import RegProductos from './paginas/admin/Productos'


function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path={['/admin', '/admin/ventas', '/admin/usuarios', '/admin/productos']}>
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
                <Route path='/admin/productos' exact>
                  <RegProductos/>
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/login']}>
            <AuthLayout>
              <Switch>
                <Route path='/login'>
                  <Login />
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