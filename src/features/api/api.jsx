import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GameSpinnerWindow from "../../components/GameComponents/GameSpinnerWindow"


const key = "33121417-d326c5dfd781e6d9400ae77ef";
const imgID = 6812515;

function GetApiPics({currentQuestionImage}) {

  let correctAnswer = useSelector(
    (state) => state.gameFunction.correctAnswer
  );

//https://www.freecodecamp.org/news/fetch-data-react/
//https://redux-toolkit.js.org/rtk-query/overview
//https://www.geeksforgeeks.org/how-to-fetch-data-from-apis-using-asynchronous-await-in-reactjs/

    console.log("in API.jsx", currentQuestionImage)
    
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    
  const getPics = async () => {
    setLoading(true)
    console.log("in Get pics loading 1", loading)
    const res = await fetch(`https://pixabay.com/api/?key=${key}&id=${currentQuestionImage}`);
    const data = await res.json();
    setImage(data.hits[0].largeImageURL);
    setLoading(false)
    console.log("in Get pics loading 2", loading)
  };

  useEffect(() => {
    try {
      getPics();
    } catch (err) {
      console.error(err);
    }
  }, [image, currentQuestionImage]);

  return (
    <div className="max-w-xs max-h-80">
      {loading ? (
      <GameSpinnerWindow />) :
      (<img className="w-fit h-full p-8" src={image} alt={correctAnswer} />)
      }
    </div>
  );
}

export default GetApiPics;
