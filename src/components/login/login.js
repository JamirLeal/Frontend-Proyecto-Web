import React, { useState } from "react";
import appConfig from "../../appConfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userInfo, setInfo] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    setInfo({
        ...userInfo,
        [event.target.name]: event.target.value
    });
  }

  const handleClick = async (event) => {
    event.preventDefault();
    console.log(userInfo);
    const dataToSend = {
      email: userInfo.email,
      password: userInfo.password,
    }
    let response = await axios.post(appConfig.urlBackEnd + 'credentials', dataToSend);
    console.log(response.data);
    if(response.data.answer === "Login success"){
        // Guardar en una cookie el login.
        localStorage.setItem('token', userInfo.email);
        navigate('/MyCalendar');
        //actualizar el estado de logged en el component App
    }else{
        alert('El usuario o contraseña estan equivocado.')
    }
  }

  return(
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
      <div className="measure">
          <fieldset id="login" className="ba b--transparent ph0 mh0">
          <legend className="f2 fw6 ph0 mh0 center">Log In</legend>
          <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" name="email"  id="email"
              onChange={ handleChange }/>
          </div>
          <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" name="password"  id="password"
              onChange={ handleChange }/>
          </div>
          </fieldset>
          <div className="">
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
          type="submit" value="Log in" 
          onClick={ handleClick }/>
          </div>
          <div className="lh-copy mt3">
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" 
            onClick={() => { navigate('/register') }}/>
          </div>
      </div>
      </main>
      </article>
    );
};

export default Login;