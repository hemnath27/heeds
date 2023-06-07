import React from 'react';
import './df.css';


class PDFDownloader extends React.Component {
  handleDownloadPDF = () => {
    // Send a request to the server to download the PDF
    fetch('http://localhost:5000/api/download-pdf')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error downloading PDF');
        }
        return response.blob();
      })


      .then((blob) => {
        // Create a URL for the blob
        const url = URL.createObjectURL(blob);

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = url;
        link.download = 'document.pdf';

       // Append the link to the document body
       document.body.appendChild(link);

       // Trigger the click event on the link
       link.click();

       // Clean up by revoking the object URL and removing the link
       URL.revokeObjectURL(url);
       document.body.removeChild(link);
     })
     .catch((error) => {
       console.log(error);
     });
 };

  render() {
    return (
      <div>
        <button className='download_button' onClick={this.handleDownloadPDF}>Download PDF</button>
      </div>
    );
  }
}

export default PDFDownloader;
