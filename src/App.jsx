import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "../src/pages/Home";
import FAQ from "../src/pages/FAQ";
import NotFound from "../src/pages/404";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className=" md:p-16">
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
