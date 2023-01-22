import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Home from "../src/pages/Home";
import Game from "../src/pages/Game";
import FAQ from "../src/pages/FAQ";
import NotFound from "../src/pages/404";
import { Route, Routes, useLocation } from "react-router-dom";
import { Color } from "./features/flashcard/Color";
import { Letter } from "./features/flashcard/Letter";
import { Number } from "./features/flashcard/Number";
import { Shape } from "./features/flashcard/Shape";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<Game />}>
          <Route path="color" element={<Color />} />
          <Route path="letter" element={<Letter />} />
          <Route path="number" element={<Number />} />
          <Route path="shape" element={<Shape />} />
        </Route>
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
