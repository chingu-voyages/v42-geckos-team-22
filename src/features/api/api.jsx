import { useEffect, useState } from "react";
import "./App.css";

const key = "33121417-d326c5dfd781e6d9400ae77ef";
const imgID = 7665674;

function App() {
  const [panda, setPanda] = useState(null);
  const getPics = async () => {
    const res = await fetch(`https://pixabay.com/api/?key=${key}&id=${imgID}`);
    const data = await res.json();
    setPanda(data.hits[0].largeImageURL);
  };

  useEffect(() => {
    try {
      getPics();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="App">
      <img className="w-80" src={panda} alt="panda" />
    </div>
  );
}

export default App;
