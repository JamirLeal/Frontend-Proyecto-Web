import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";
import "tachyons";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Pagina de inicio</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/Calendario"
        element={<div>Es es la pagina de Calendario</div>}
      />
      <Route path="/Perfil" element={<div>Esta es la pagina de Perfil</div>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
