// Sidebar.js
import React from 'react';
import Logo_dash from './image/logo.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logos">
        <img src={Logo_dash} alt="logo" />
      </div>
      <ul className="menu">
        <li>Dashboard</li>
        <li>Customers</li>
        <li>Orders</li>
        <li>Analytics</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
