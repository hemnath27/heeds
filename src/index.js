import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Login';
import Dashboard from './Dashboard';
import Apps from './apps';
import Test from './test';
import Chart from './chart';
import Table from './table';
import Profile from './profile';
import Pdf from './df';
import Logins from './logins';
import Invoice from './ai';
import Hello from './hello';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/apps" element={<Apps />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/table" element={<Table />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/df" element={<Pdf />} />
        <Route path="/" element={<Logins />} />
        <Route path="/ai" element={<Invoice/>} />
        <Route path="/hello" element={<Hello/>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
 