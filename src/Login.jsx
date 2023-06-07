import React, { useState } from 'react';
import './Login.css';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './image/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/login', { email, password });
      // console.log(response.data);
      console.log(response.status);

      if (response && response.status === 200 && response.data) {
        console.log(response.data);
        // Store the user data in a cookie
        Cookies.set('userData', JSON.stringify(response.data));
        const cookieData = Cookies.get('userData');
        console.log(JSON.parse(cookieData));
        navigate('/dashboard');
      }
    } catch (error) {
      console.error(error.response.data);
      // Handle login error, e.g., display error message to the user
    }
  };

  return (
    <div className="login">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <header>
            <div className="logo justify-content-center d-flex col-sm-12">
              <img className="logo_img" src={Image} alt='logo' />
            </div>
          </header>
        </div>
      </div>
      <section id="login_section" className="login_section">
        <div className="container-lg">
          <div className="row justify-content-center d-flex">
            <h1 className='login_text mb-5 mt-5 justify-content-center d-flex'>Login</h1>
            <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 justify-content-center'>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" autoComplete='off' required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="password" autoComplete='off' required />
                </div>
                {/* <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div> */}
                <div className="login_button mt-4">
                  <button type="submit" className="btn btn-warning p-20">Login</button>
                </div>
              </form>
              <div className="forgot_password mt-3">
                <a href="/forgot-password">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
