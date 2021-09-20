import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import { Locales } from './components/Locales/Locales';
import { Home } from './components/Home/Home';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Administracion } from './components/Administracion/Administracion';
import { Agregar } from './components/Agregar/Agregar';
import { Nuevas } from './components/Nuevas/Nuevas';
import { NuevoUser } from './components/NuevoUser/NuevoUser';
import { NoticiaVista } from './components/NoticiaVista/NoticiaVista';
import { Deportes } from './components/Deportes/Deportes';
import { Borrar } from './components/Borrar/Borrar';
import { Provinciales } from './components/Provinciales/Provinciales';
import { Nacionales } from './components/Nacionales/Nacionales';
import { Editar } from './components/Editar/Editar';
import { Publicidad } from './components/Publicidad/Publicidad';
import { Quienes } from './components/Quienes/Quienes';
import { Contactos } from './components/Contactos/Contactos';
import { Turismo } from './components/Turismo/Turismo';
import { Cultura } from './components/Cultura/Cultura';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/noticias/administracion/editar/:id">
            <Editar />
          </Route>
          <Route path="/noticias/administracion/borrar/:id">
            <Borrar />
          </Route>
          <Route path="/noticias/administracion/nuevas">
            <Nuevas />
          </Route>
          <Route path="/noticias/administracion/usuario">
            <NuevoUser />
          </Route>
          <Route path="/noticias/administracion/publicidad">
            <Publicidad />
          </Route>
          <Route path="/noticias/administracion/agregar">
            <Agregar />
          </Route>
          <Route path="/noticias/administracion">
            <Administracion />
          </Route>
          <Route path="/noticias/deportes">
            <Deportes />
          </Route>
          <Route path="/noticias/nacionales">
            <Nacionales />
          </Route>
          <Route path="/noticias/provinciales">
            <Provinciales />
          </Route>
          <Route path="/noticias/cultura">
            <Cultura />
          </Route>
          <Route path="/noticias/turismo">
            <Turismo />
          </Route>
          <Route path="/noticias/nosotros">
            <Quienes />
          </Route>
          <Route path="/noticias/contactos">
            <Contactos />
          </Route>
          <Route path="/noticias/locales">
            <Locales />
          </Route>
          <Route path="/noticias/:id">
            <NoticiaVista />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <h1>no existe</h1>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
