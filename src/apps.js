// App.js
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function Apps() {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default Apps;
