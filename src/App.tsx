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
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
