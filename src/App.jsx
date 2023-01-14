import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "../src/pages/Home";
import Case from "../src/pages/Case";
import Color from "../src/pages/Color";
import Number from "../src/pages/Number";
import Shape from "../src/pages/Shape";
import FAQ from "../src/pages/FAQ";
import Signup from "../src/pages/Signup";
import Login from "../src/pages/Login";
import NotFound from "../src/pages/404";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/number" element={<Number />} />
        <Route path="/shape" element={<Shape />} />
        <Route path="/color" element={<Color />} />
        <Route path="/case" element={<Case />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
