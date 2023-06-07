import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
// import Sidebar from './sidebar';
import Test from './test';
import Chart from './chart';
import Table from './table';
import Profile from './profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/table" element={<Table />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
 