import React, { useState } from 'react';
import './bill.css';
import Image from './image/logo.png';


const BillingForm = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const [invoiceDetail, setInvoiceDetail] = useState('');
  const [cost, setCost] = useState('');
  const [subTotal, setSubTotal] = useState('');
  const [total, setTotal] = useState('');
  const [signature, setSignature] = useState('');

  const handleSerialNumberChange = (event) => {
    setSerialNumber(event.target.value);
  };

  const handleInvoiceDetailChange = (event) => {
    setInvoiceDetail(event.target.value);
  };

  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  const handleSubTotalChange = (event) => {
    setSubTotal(event.target.value);
  };

  const handleTotalChange = (event) => {
    setTotal(event.target.value);
  };

  const handleSignatureChange = (event) => {
    setSignature(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div className='container-lg'>
      {/* Top left corner */}
      <div>
        <img className='logo_img' src={Image} alt="Logo" />
        <div>
          <label>From Address:</label>
          <input className='input_from' type="text" />
        </div>
      </div>

      {/* Top right corner */}
      <div>
        <div>
          <label>To Address:</label>
          <input className='input_to' type="text" />
        </div>
      </div>

      {/* Table fields */}
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Invoice Detail</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" value={serialNumber} onChange={handleSerialNumberChange} />
            </td>
            <td>
              <input type="text" value={invoiceDetail} onChange={handleInvoiceDetailChange} />
            </td>
            <td>
              <input type="text" value={cost} onChange={handleCostChange} />
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>Sub Total:</td>
            <td>
              <input type="text" value={subTotal} onChange={handleSubTotalChange} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>Total:</td>
            <td>
              <input type="text" value={total} onChange={handleTotalChange} />
            </td>
          </tr>
        </tfoot>
      </table>

      {/* E-Signature */}
      <div className='e-sig'>
        <label>E-Signature:</label>
        <input className='e-sing' type="file" onChange={handleSignatureChange} />
      </div>

      {/* Submit button */}
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default BillingForm;
