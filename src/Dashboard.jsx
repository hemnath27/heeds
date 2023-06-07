import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './image/logo.png';
import Avatar from './image/fav.jpg';
import Cookies from 'js-cookie';
import 'bootstrap/dist/js/bootstrap.bundle';
import {useNavigate} from 'react-router-dom';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    // Retrieve the user data from the cookie
    const cookieData = Cookies.get('userData');
    if (cookieData) {
      try {
        const parsedData = JSON.parse(cookieData);
        setUserData(parsedData);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
  }, []);

  const handleSignOut = () => {
    Cookies.remove('userData'); // Remove the userData cookie
    navigate('/'); // Navigate to the login page
    
  };


  return (
    <div className="dashboard">
      <section id="navbar_dash" className="navbar_dash">
        <div className="container-xxl col-12">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
            <a href="#" onClick={() => {
                    Cookies.remove('userData'); // Remove the userData cookie
                    navigate('/'); // Redirect to the login page
                  }} className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
              <img src={Image} className="logo_img1" alt="" /> 
            </a>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><a href="./dashboard" className="nav-link px-2 link-dark">Home</a></li>
              <li><a href="./table" className="nav-link px-2 link-dark">Table</a></li>
              <li><a href="#"  className="nav-link px-2 link-dark">Pricing</a></li>
              <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
              <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
            </ul>

            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={Avatar} alt="mdo" width="50" height="50" className="rounded-circle" />
              </a>
              <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile: {userData && userData.email}</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                   <a className="dropdown-item" href="#" onClick={handleSignOut}>
                      Sign out
                     </a>
                 </li>
              </ul>
            </div>
          </header>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
