import React, { useState, useRef } from 'react';
import axios from 'axios';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import Logo1 from './image/logo.png';
import Sign from './image/signature.png';


const styles = StyleSheet.create({
  page: {
    padding: '20pt',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20pt',
  },
  detials: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20pt',
  },
  logo: {
    width: '100pt',
  },
  headerText: {
    fontSize: '12pt',
  },
  footer: {
    position: 'absolute',
    bottom: '0pt',
    left: '0pt',
    right: '0pt',
    paddingTop: '20pt',
    paddingBottom: '20pt',
    textAlign: 'center',
    fontSize: '14pt',
    color: '#000',
    backgroundColor: '#E1AB00',
  },
  section: {
    marginBottom: '10pt',
    fontSize: '12pt',
  },
  tableContainer: {
    marginBottom: '10pt',
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: '5pt',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: '5pt',
  },
  tableCell: {
    width: '20%',
    padding: '5pt',
    fontSize: '10pt',
  },
  textpaid:
  {
    marginBottom: '5pt',
  },
  downloadBtn:
  {
    backgroundColor: '#000',
    color: '#fff',
    paddingTop: '1opt',
    paddingBottom: '10pt',
    paddingLeft: '20pt',
    paddingRight: '20pt',
    marginTop: '50pt',
    textAlign: 'center',
    textDecoration: 'none',
  },
  signature: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '20pt',
    position: 'absolute',
    bottom: '200pt',
    left: '30pt',
  },
  signatureText: {
    fontSize: '14pt',
    marginBottom: '5pt',
  },
  signatureLine: {
    width: '65pt',
    height: '1pt',
    backgroundColor: '#000',
  },
  signatureName: 
  {
    color: '#000',
    marginTop: '8pt',
    fontSize: '14pt',
  },
  signatureCom: 
  {
    color: '#000',
    marginTop: '5pt',
    fontSize: '10pt',
    justifyContent: 'center',
  },
});

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
      <Page style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src={Logo1} />
          <Text style={styles.headerText}>Website: www.heeds.studio | Phone: +1234567890</Text>
        </View>
        <View style={styles.detials}>
        <View style={styles.section}>
          <Text style={styles.textpaid}>Seller: {invoiceData?.seller?.sellername}</Text>
          <Text style={styles.textpaid}>Address: {invoiceData?.seller?.selleraddress}</Text>
          <Text style={styles.textpaid}>Phone Number: {invoiceData?.seller?.sellerphone}</Text>
          <Text style={styles.textpaid}>GST Number: {invoiceData?.seller?.sellergstin}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.textpaid}>Buyer: {invoiceData?.buyer?.buyername}</Text>
          <Text style={styles.textpaid}>Address: {invoiceData?.buyer?.buyeraddress}</Text>
          <Text style={styles.textpaid}>Phone Number: {invoiceData?.buyer?.buyerphone}</Text>
          <Text style={styles.textpaid}>GST Number: {invoiceData?.buyer?.buyergstin}</Text>
        </View>
        </View>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableCell}>Product Name</Text>
            <Text style={styles.tableCell}>Description</Text>
            <Text style={styles.tableCell}>Cost</Text>
            <Text style={styles.tableCell}>Quantity</Text>
            <Text style={styles.tableCell}>Total Cost</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{invoiceData?.product?.productname}</Text>
            <Text style={styles.tableCell}>{invoiceData?.product?.productdescription}</Text>
            <Text style={styles.tableCell}>{invoiceData?.product?.cost}</Text>
            <Text style={styles.tableCell}>{invoiceData?.product?.quantity}</Text>
            <Text style={styles.tableCell}>{invoiceData?.product?.totalcost}</Text>
          </View>
        </View>

        <View style={styles.signature}>
        <Text style={styles.signatureText}>Signature:</Text>
        <Text style={styles.signatureLine}></Text>
        <Image style={styles.logo} src={Sign} />
        <Text style={styles.signatureCom}>CEO</Text>
        <Text style={styles.signatureCom}>Heeds Adtech Solution Pvt Ltd</Text>
      </View>

        <Text style={styles.footer}>Heeds Adtech Solutions Pvt Ltd.</Text>
      </Page>
    </Document>
  );

  return (
    <div>
      <h1>Invoice</h1>
      <button onClick={fetchInvoiceData}>Fetch Invoice Data</button>
      {invoiceData && (
        <PDFDownloadLink style={styles.downloadBtn} document={generatePDF()} fileName="invoice.pdf">
          {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
        </PDFDownloadLink>
      )}
    </div>
  );
};


export default Invoice;
