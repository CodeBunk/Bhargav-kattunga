// src/components/PdfViewer.tsx
import React from "react";
import Navbar from "../components/Navbar";

const PdfViewer = () => {
  return (
    <div className=" h-screen w-screen flex items-center justify-center bg-black">
      <Navbar />
      <embed
        src="/BhargavResume.pdf"
        width="100%"
        height="100%"
        className="bg-black pt-[112px]"
      />
    </div>
  );
};

export default PdfViewer;
