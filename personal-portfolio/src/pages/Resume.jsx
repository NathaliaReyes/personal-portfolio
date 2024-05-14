import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import cvPdf from '../assets/cv-silvia_reyes.pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <h1 className='text-center text-primary mt-3'>Mi Currículum</h1>
      <div>
        <Document
          file={cvPdf}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={1.5} />
          ))}
        </Document>
        <p>Página {pageNumber} de {numPages}</p>
      </div>
    </div>
  );
}
