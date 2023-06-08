import React, { useState } from 'react';
import axios from 'axios';
import { PDFDownloadLink, Document, Page, Text, Table, TableCell, TableHeader, TableRow, View} from '@react-pdf/renderer';
// import './invoice.css';


const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState(null);

  const fetchInvoiceData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/idata');
      setInvoiceData(response.data);
    } catch (error) {
      console.error('Error fetching invoice data:', error);
    }
  };

  const generatePDF = () => (
    <Document>
      <Page>
        <View>
        <Text>Seller: {invoiceData?.seller?.sellername}</Text>
        <Text>Address: {invoiceData?.seller?.selleraddress}</Text>
        <Text>Seller GST:{invoiceData?.seller?.sellergstin} </Text>
        </View>
        <Text>Buyer: {invoiceData?.buyer?.buyername}</Text>
        <Text>Address: {invoiceData?.buyer?.buyeraddress}</Text>
        <Text>Buyer GST:{invoiceData?.buyer?.buyergstin} </Text>
        <Table>
          <TableHeader>
            <TableCell>Product Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total Cost</TableCell>
          </TableHeader>
          <TableRow>
            <TableCell>{invoiceData?.product?.productname}</TableCell>
            <TableCell>{invoiceData?.product?.productdescription}</TableCell>
            <TableCell>{invoiceData?.product?.cost}</TableCell>
            <TableCell>{invoiceData?.product?.quantity}</TableCell>
            <TableCell>{invoiceData?.product?.totalcost}</TableCell>
          </TableRow>
        </Table>

        </Page>
    </Document>
  );

  return (
    <div>
      <h1>Invoice</h1>
      <button onClick={fetchInvoiceData}>Fetch Invoice Data</button>
      {invoiceData && (
        <PDFDownloadLink className='download_pdf' document={generatePDF()} fileName="invoice.pdf">
          {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default Invoice;
