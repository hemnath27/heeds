import React, { useState } from 'react';
import './logins.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import V1 from "./image/Tablet login-amico.png";
import Logos from './image/logo.png';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
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
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12">
          <img
            src={V1}
            alt="Background Image"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 col-lg-6 d-flex align-items-center justify-content-center col-sm-12">
          <div className="text-center ">
            <img
              src={Logos}
              alt="Logo"
              className="mb-4 logos_img"
            />
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}  
                  id="password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-warning">
                Log in
              </button>
              <div className="form-link align-item-start">
                <a href="#">Forgot Password</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
