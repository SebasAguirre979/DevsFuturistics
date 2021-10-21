import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';
import AuthLayout from './layouts/AuthLayout';
import Index from './paginas/Index';
import Admin from './paginas/admin/Index';
import Login from './paginas/auth/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Clientes from './paginas/admin/Clientes';
import Ventas from './paginas/admin/Ventas';
import RegProductos from './paginas/admin/Productos'
import ProtectedRoute from './componentes/ProtectedRoute';
import Pendiente from "./componentes/pendiente/Pendiente";




function App() {
  return (

    
    <div className='App'>
      <Router>
        <Switch>
          <Route path={['/admin','/admin/ventas', '/admin/usuarios', '/admin/productos']}>
            
            <PrivateLayout>
              <Switch>
                <Route path='/admin/ventas' exact>
                  <Ventas />
                </Route>
                <ProtectedRoute path='/admin' exact component={Admin} />
                  
            
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

          <Route path={['/pendiente']}>
            <AuthLayout>
              <Switch>
                <Route path='/pendiente'>
                  <Pendiente />
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