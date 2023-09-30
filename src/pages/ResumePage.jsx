import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export const ResumePage = () => {
  return (
    <>
      <h1>Resume</h1>
      <div className="container">
        <div className="flex flex-col items-start">
          <button className="btn btn-accent my-4 ">
            <a href="/Adrienne Kecskes Resume 2023.pdf">
              Download My Resume
            </a>
          </button>
          <Document file="/Adrienne Kecskes Resume 2023.pdf">
            <div className="flex flex-row">
              <Page
                renderAnnotationLayer={false}
                renderTextLayer={false}
                pageNumber={1}
              />
              <Page
                renderAnnotationLayer={false}
                renderTextLayer={false}
                pageNumber={2}
              />
            </div>
          </Document>
        </div>
      </div>
    </>
  );
};
export default ResumePage;
