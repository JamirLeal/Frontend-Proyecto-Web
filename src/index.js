import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Perfil from './components/perfil/Perfil';
import Login from "./components/login/login";
import Register from "./components/register/register";



render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Calendario" element={<div>Es es la pagina de Calendario</div>}/>
      <Route path="/Perfil" element={<Perfil/>} />

    </Routes>

  </BrowserRouter>,
  document.getElementById("root")
);
