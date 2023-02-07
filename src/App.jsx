import React from "react";
import Header from "./components/headerComponents/Header";
import Footer from "./components/Footer";
// import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import Game from "./pages/Game";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/404";
import { Route, Routes, useLocation } from "react-router-dom";
import { Color } from "./features/flashcard/Color";
import { Letter } from "./features/flashcard/Letter";
import { Number } from "./features/flashcard/Number";
import { Shape } from "./features/flashcard/Shape";

function App() {
  const location = useLocation();

  return (
    <div className="mx-auto xl:max-w-[93.75rem]">
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="game" element={<Game />}>
          <Route path="color" element={<Color />} />
          <Route path="letter" element={<Letter />} />
          <Route path="number" element={<Number />} />
          <Route path="shape" element={<Shape />} />
        </Route>
        <Route path="/faq" element={<FAQ />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
