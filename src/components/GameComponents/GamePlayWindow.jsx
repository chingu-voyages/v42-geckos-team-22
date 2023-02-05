<<<<<<< HEAD
import React from "react";
import { MoreOptions } from "../GameComponents/utilities";
import DummyCard from "../../assets/gamePage/card3.jpg";

function GamePlayWindow(props) {
  return (
    <div className={props.cname}>
      <div className="mt-14 md:ml-14 md:mt-0 md:flex md:flex-1 md:justify-center">
        <img className="" src={DummyCard} alt="Three" />
      </div>
      <MoreOptions cname="hidden max-h-14 max-w-14 md:flex md:mr-1 md:mt-2" />
    </div>
  );
=======
import React, { useState } from 'react';
// import Axios from 'axios';
import { MoreOptions } from '../GameComponents/utilities';
import DummyCard from '../../assets/card3.jpg'

//pixelbay API Key 33121417-d326c5dfd781e6d9400ae77ef

// api format https://pixabay.com/api/?key=33121417-d326c5dfd781e6d9400ae77ef&id=159731

function GamePlayWindow (props) {
    
   

    const [ image, setImage ] = useState("");

    // Axios
    //     .get('https://pixabay.com/api/?key=33121417-d326c5dfd781e6d9400ae77ef&id=159731',, {headers: {"Access-Control-Allow-Origin": "*"}, })
    //     .then(
    //     (response) => {
    //         console.log(response.data.hits[0].pageURL);
    //         setImage(response.data.hits[0].pageURL)
    //     }
    // );
    

//, {headers: {"Access-Control-Allow-Origin": "*"}, }

    return (
        <div className={props.cname}>
            <div className='md:ml-14 md:flex-1 md:flex md:justify-center mt-14 md:mt-0'>
                <img className='' method='post' encType='multipart/form-data' src={image} alt='Cow' />
            </div>
            <MoreOptions cname='hidden max-h-14 max-w-14 md:flex md:mr-1 md:mt-2'/>
        </div>
    )
>>>>>>> c857543ffe302b33f062fcfcaae0671aa2a6f9d5
}

export default GamePlayWindow;
