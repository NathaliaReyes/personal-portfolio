import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import { useState, useEffect } from 'react';
import cvPdf from '../assets/cv-silvia_reyes.pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [document, setDocument] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    const loadingTask = pdfjs.getDocument(cvPdf);
    loadingTask.promise.then(
      pdf => {
        console.log('PDF: ', pdf);
        setDocument(pdf);
        setNumPages(pdf.numPages);
        setIsLoading(false);
      },
      error => {
        console.error("Error while loading PDF:", error);
      });

    const handleResize = () => {
      setScale(window.innerWidth < 600 ? 0.5 : 1.5);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);

  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='pt-4'>
      <a className='text-blue text-bold text-right' href={cvPdf} download="Silvia_Reyes_Resume.pdf">Download Resume</a>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Document file={cvPdf}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={scale} />
          ))}
        </Document>
      </div>
    </div>
  );
}
