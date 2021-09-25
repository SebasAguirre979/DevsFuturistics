import Layout from './Layout';
import Inicio from '../paginas/Inicio';
import Usuarios from '../paginas/Usuarios';
import Vendedores from '../paginas/Vendedores';
import Ventas from '../paginas/Ventas';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Switch>
          <Route path='/Ventas'>
              <Ventas />
            </Route>
            <Route path='/Vendedores'>
              <Vendedores />
            </Route>
            <Route path='/Usuarios'>
              <Usuarios />
            </Route>
            <Route path='/'>
              <Inicio />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
