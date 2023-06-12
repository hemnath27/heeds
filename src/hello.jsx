import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MUIDataTable from 'mui-datatables';

const data = [
  ['John Doe', 'Software Engineer', 'New York', 28, 'hema'],
  ['Jane Smith', 'UI Designer', 'San Francisco', 32, 'bgjvhjv'],
  ['Michael Johnson', 'Data Analyst', 'Chicago', 40, 'hekko' ],
  // Add more data rows here...
];

const columns = [
  {
    name: 'Name',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'Position',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'Location',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'Age',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'hello',
    options: {
      filter: true,
      sort: false,
    },
  },
];

const options = {
  filterType: 'checkbox',
  responsive: 'vertical', // Set the responsive mode to 'vertical'
  selectableRows: 'multiple',
  // Add more options as needed...
};

const ExampleDataTable = () => {
  return (
    <div className="container-lg">
    <MUIDataTable
      title="Invoice Data"
      data={data}
      columns={columns}
      options={options}
    />
    </div>
  );
};

export default ExampleDataTable;
