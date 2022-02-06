import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Perfil from './pages/Perfil';


render(
  <BrowserRouter>
    <Routes>
           <Route path="/"  element = {<div>Login</div>}/>

           <Route path="/Calendario" element = {<div>Es es la pagina de Calendario</div>}/>

           <Route path="/Perfil"  element = {<Perfil/>}/>

           <Route path="/Register"  element = {<div>Esta es la pagina de Registro</div>}/>
    </Routes>

  </BrowserRouter>,
  document.getElementById("root")
);