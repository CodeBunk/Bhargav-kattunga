/** @format */

import { useEffect, useLayoutEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import BaseLayout from "./components/Layouts/BaseLayout";
import Projects from "./Pages/Projects";
import PdfViewer from "./Pages/PdfViewer";
import Leafcraft from "./Pages/Leafcraft";

function App() {
  function ScrollToTop() {
    var { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, [pathname]);
    return null;
  }
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* <Route element={<BaseLayout />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<PdfViewer />} />
          <Route path="/leafcraft" element={<Leafcraft />} />
          <Route path="/wishtronics" element={<div />} />
          <Route path="/collabs" element={<div />} />
          <Route path="/travana" element={<div />} />
          <Route path="/technovation" element={<div />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
