import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Index = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <>
      <h1>Download Page</h1>
      <div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js">
          <Viewer
            fileUrl="/dummyfile.pdf"
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
    </>
  );
};

export default Index;
