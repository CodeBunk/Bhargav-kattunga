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
import Travia from "./Pages/Travia";
import Navbar from "./components/Navbar";
import KingsQueen from "./Pages/KingsQueen";
import Wishtronics from "./Pages/Wishtronics";
import OneImmersive from "./Pages/OneImmersive";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Curated from "./Pages/Curated";
import Archives from "./Pages/Archives";


function ScrollToTop() {
  const { pathname } = useLocation();

  // useLayoutEffect will run synchronously before painting
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {

  return (

    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* <Route path="/resume" element={<Resume />} /> */}

        <Route path="/" element={<Home />} />
        {/* <Route element={<BaseLayout />} > */}
        <Route path="/project" element={<Projects />} />
        <Route path="/resume" element={<PdfViewer />} />
        <Route path="/about" element={<About />} />
        <Route path="/curated" element={<Curated />} />
        <Route path="/project" element={<Wishtronics />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/kingzqueenz" element={<KingsQueen />} />
        <Route path="/oneImmersive" element={<OneImmersive />} />
        <Route path="/travana" element={<div />} />
        <Route path="/travia" element={<Travia />} />
        <Route path="/Leafcraft" element={<Leafcraft />} />
        <Route path="/technovation" element={<div />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter >

  );
}

export default App;
