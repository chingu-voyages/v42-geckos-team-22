import { useEffect, useState } from "react";


const key = "33121417-d326c5dfd781e6d9400ae77ef";
const imgID = 6812515;

function GetApiPics() {
  const [image, setImage] = useState(null);
  const getPics = async () => {
    const res = await fetch(`https://pixabay.com/api/?key=${key}&id=${imgID}`);
    const data = await res.json();
    setImage(data.hits[0].largeImageURL);
  };

  useEffect(() => {
    try {
      getPics();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="">
      <img className="w-80" src={image} alt="panda" />
    </div>
  );
}

export default GetApiPics;
