import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import { useState, useEffect } from 'react';
import cvPdf from '../assets/cv-silvia_reyes.pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    const loadingTask = pdfjs.getDocument(cvPdf);
    loadingTask.promise.then(
      pdf => {
        console.log('PDF: ', pdf);
        setNumPages(pdf.numPages);
        setIsLoading(false);
      },
      error => {
        console.error("Error while loading PDF:", error);
      });

      const handleResize = () => {
        const pdfContainerWidth = window.innerWidth * 0.99; // Ajusta el ancho al 90% del viewport
        const newScale = pdfContainerWidth / 1000; // Asume que el PDF tiene un ancho base de 1000px
        setScale(newScale < 0.6 ? 0.6 : newScale); // Mínimo de 0.6 en pantallas pequeñas
      };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);

  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='pt-2'>
      <a className='ml-2 text-sky-800 underline font-semibold text-sm md:text-base' href={cvPdf} download="Silvia_Reyes_Resume.pdf">Download Resume</a>
      <div style={{ display: 'flex', justifyContent: 'center', overflowY: 'auto', maxHeight: '100vh' }}>
        <Document file={cvPdf}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={scale} />
          ))}
        </Document>
      </div>
    </div>
  );
}
