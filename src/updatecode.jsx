import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import './table.css';

function MyDataTable() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [editingRowId, setEditingRowId] = useState(null);
  const [searchText, setSearchText] = useState('');

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

  useEffect(() => {
    fetchData();
  }, []);

  // ... Rest of the code ...

  const handleSaveEdit = async (row) => {
    const isValid = validateData(row);
    if (isValid) {
      try {
        // Make a PUT request to update the data in the backend
        const response = await fetch(`http://127.0.0.1:5000/api/data/${row.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(row),
        });

        if (!response.ok) {
          throw new Error('Error updating data');
        }

        setEditingRowId(null);
        console.log('Save Edit:', row);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Invalid data');
    }
  };

  // ... Rest of the code ...

  return (
    <>
      <div className='container-xxl my-5  justify-content-end d-flex'>
        <input
          className='search_input'
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearch}
        />
        <div className='row mx-5'>
          <button className='export_button' onClick={handleExport}>
            Export
          </button>
        </div>
      </div>
      <div className='container-xxl '>
        <DataTable
          columns={columns}
          data={data}
          defaultSortField="name"
          pagination
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
