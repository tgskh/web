import React from 'react'
import logoPicture from '../images/logo.png'
import '../css/login.css'

function LoginPage () {
  const loginWelcomeForm = document.getElementsByClassName("login-form");
  const loginInputForm = document.getElementsByClassName("login-input");
  const loginSignUpForm = document.getElementsByClassName("login-signup");
  const loginButton = () => {
    loginWelcomeForm[0].style.transform = 'translateY(-1000px)';
    loginInputForm[0].style.transform = 'translateY(-120px)';
  }

  const signUpButton = () => {
    loginWelcomeForm[0].style.transform = 'translateX(-1000px)';
    loginSignUpForm[0].style.transform = 'translateX(0px)';
  }

  const loginButtonBack = () => {
    loginWelcomeForm[0].style.transform = 'translateY(0px)';
    loginInputForm[0].style.transform = 'translateY(1000px)';
  }

  const signUpButtonBack = () => {
    loginWelcomeForm[0].style.transform = 'translateX(0px)';
    loginSignUpForm[0].style.transform = 'translateX(1000px)';
  }

  const logIn = () => {
    const username = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    console.log(username, password); console.log('-------------');
    // checkCred(username, password) ? 
  }

  const checkCred = async (username, password) => {
    return false;
  }

  return (
    <div className="app-container">
      <div className="login-main">
        <div className="login-form">
          <div className="logo">
            <img src={logoPicture} className='logoPicture'/>
            <h3>Movie Radar</h3>
          </div>
          <p>Enjoy the newest movies</p>
          <div className="login-button" onClick={loginButton}><a href="#">Log in</a></div>
          <p>No account? <a href="#" onClick={signUpButton}>Sign up</a></p>
        </div>
        <div className="login-input">
        <button className='buttonBack' onClick={loginButtonBack}>← back</button>
          <input type="text" placeholder="EMAIL...demo" id="login-email"/>
          <input type="password" placeholder="PASSWORD...demo" id="login-password"/>
          <div className="login-button" id="login-confirm" onClick={logIn}><a href="#">WATCH</a></div>
        </div>
        <div className="login-signup">
          <button className='buttonBack' onClick={signUpButtonBack}>← back</button>
          <input type="text" placeholder="EMAIL..." id="signUp-email"/>
          <input type="text" placeholder="PASSWORD..." id="signUp-password"/>
          <div className="login-button"><a href="#">Sign up</a></div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;