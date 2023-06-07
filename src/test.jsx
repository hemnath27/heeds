import React from 'react';
import DataTable from 'react-data-table-component';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import './test.css';
import Image from './image/logo.png';
import Avatar from './image/fav.jpg';

const columns = [
  {
    name: 'Title',
    selector: row => row.title,
  },
  {
    name: 'Year',
    selector: row => row.year,
  },
];

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 3,
    title: 'Ghostbusters',
    year: '1985',
  },
];

const Export = ({ onExport }) => (
  <button onClick={onExport}>Export</button>
);

const downloadCSV = (data) => {
  const csvData = Papa.unparse(data); // Convert data to CSV format using Papa Parse library
  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
  saveAs(blob, 'data.csv');
};

function MyComponent() {
  const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);

  return (

    <div className="dashboard">
    <section id="navbar_dash" className="navbar_dash">
      <div className="container-xxl col-12">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
          <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src={Image} className="logo_img1" alt="" />
          </a>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 link-dark">Home</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
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
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </header>
      </div>
    </section>

    <div className='conatiner'>
    
    <DataTable
    title="Movie List"
    columns={columns}
    data={data}
    actions={actionsMemo}
    />
    </div>
    </div>

   
  );
}

export default MyComponent;


