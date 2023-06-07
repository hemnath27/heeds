import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import Image from './image/logo.png';
import Avatar from './image/fav.jpg';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import './table.css';

function MyDataTable() {

  const [data, setData] = useState([]);
  const [editingRowId, setEditingRowId] = useState(null);
  const [originalData, setOriginalData] = useState([]);
  const [searchText, setSearchText] = useState('');

  // start of dashboadrd code

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

  // end of dashboard code

  // fetch data strat

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/data');
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setOriginalData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      cell: (row) =>
        editingRowId === row.id ? (
          <input
            type="text"
            className='input_name'
            defaultValue={row.name}
            onChange={(e) => handleEditInputChange(e.target.value, row.id, 'name')}
          />
        ) : (
          row.name
        ),
    },
    {
      name: 'Age',
      selector: 'age',
      sortable: true,
      cell: (row) =>
        editingRowId === row.id ? (
          <input
            type="text"
            className='input_age'
            defaultValue={row.age}
            onChange={(e) => handleEditInputChange(e.target.value, row.id, 'age')}
          />
        ) : (
          row.age
        ),
    },
    {
      name: 'Location',
      selector: 'location',
      sortable: true,
      cell: (row) =>
        editingRowId === row.id ? (
          <input
            type="text"
            className='input_location'
            defaultValue={row.location}
            onChange={(e) => handleEditInputChange(e.target.value, row.id, 'location')}
          />
        ) : (
          row.location
        ),
    },
    {
      name: 'Edit',
      cell: (row) =>
        editingRowId === row.id ? (
          <button className='save_button' onClick={() => handleSaveEdit(row)}>Save</button>
        ) : (
          <button className='edit_button' onClick={() => handleEdit(row)}>Edit</button>
        ),
      button: true,
    },
    {
      name: 'Delete',
      cell: (row) => (
        <button className='delete_button' onClick={() => handleDelete(row.id)}>Delete</button>
      ),
      button: true,
    },
  ];

  const handleEdit = (row) => {
    setEditingRowId(row.id);
  };

  // update code

  

  // update code end

  const handleSaveEdit = (row) => {
    const isValid = validateData(row);
    if (isValid) {
      
    
    setEditingRowId(null);
    // Implement the logic to save the edited data here
    console.log('Save Edit:', row);
    } else {
      console.log('Invalid data');
    }
  };

  const validateData = (row) => {
    // Perform data validation based on your requirements
    if (!row.name || !row.age || !row.location) {
      return false;
    }
    return true;
  };


  const handleEditInputChange = (value, rowId, fieldName) => {
    const updatedData = data.map((row) => {
      if (row.id === rowId) {
        return { ...row, [fieldName]: value };
      }
      return row;
    });
    setData(updatedData);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchText(value);

    const filteredData = originalData.filter((row) =>
      Object.values(row)
        .join(' ')
        .toLowerCase()
        .includes(value.toLowerCase())
    );
    setData(filteredData);
  };

  const handleClearSearch = () => {
    setSearchText('');
    setData(originalData);
  };

   // Call fetchData when the component mounts
   useEffect(() => {
    fetchData();
  }, []);

  const handleExport = () => {
    const csvContent = [
      'ID,Name,Age,Location',
      ...data.map((row) => `${row.id},${row.name},${row.age},${row.location}`),
    ].join('\n');

    const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <>
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
              <li><a href="./table" className="nav-link px-2 link-dark">Features</a></li>
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
    <div className='container-xxl my-5  justify-content-end d-flex'>
        <input
        className='search_input'
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearch}
        />
        <div className='row mx-5'>
        {/* <button onClick={handleClearSearch}>Clear</button> */}
        <button className='export_button' onClick={handleExport}>Export</button>
        </div>
      </div>
      <div className='container-xxl '>
      <DataTable
        columns={columns}
        data={data}
        className='table_row'
        defaultSortField="name"
        pagination
        // className='input_datatable'
        highlightOnHover
        selectableRows
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 30]}
        noDataComponent="No data found"
        dense
      />
      </div>
    </>
  );
}

export default MyDataTable;
