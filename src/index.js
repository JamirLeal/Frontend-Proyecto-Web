import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


render(
  <BrowserRouter>
    <Routes>
           <Route path="/"  element = {<div>Login</div>}/>
           <Route path="/Calendario" element = {<div>Es es la pagina de Calendario</div>}/>
           <Route path="/Perfil"  element = {<div>Esta es la pagina de Perfil</div>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);