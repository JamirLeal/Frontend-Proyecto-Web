import './App.css';

import React, { Component, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import CalendarPage from './components/CalendarPage/CalendarPage';
import Login from './components/login/login';
import Register from './components/register/register';
import Perfil from './components/perfil/Perfil';

const App = () => {

  document.title = "Sport Analysis Tool";
    
  window.onbeforeunload = () => { window.scrollTo(0, 0); }

  const token = localStorage.getItem('token');

  return (
    <div className="app-container">
        <BrowserRouter>
          <Routes>
              <Route
                path='/'
                element={ token === null? <Login />  : <CalendarPage />}
              />
          <Route
                path='/login'
                element={ <Login /> }
              />
              <Route
                path='/register'
                element={ <Register /> }
              />
              <Route
                path='/MyCalendar'
                element={ <CalendarPage /> }
              />
              <Route
                path='/Perfil'
                element={ <Perfil /> }
              />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;