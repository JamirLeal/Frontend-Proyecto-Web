import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Perfil from './components/perfil/Perfil';
import Login from "./components/login/login";
import Register from "./components/register/register";
import MyCalendar from "./components/Calendar/MyCalendar";


render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Perfil" element={<Perfil/>} />
      <Route
        path="/Calendario"
        element={<MyCalendar />}
      />
  
    </Routes>

  </BrowserRouter>,
  document.getElementById("root")
);
