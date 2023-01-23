import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from './../redux/slices/testSlice'

function Home() {

  const counter = useSelector(state => state.test.value)
  const dispatch = useDispatch();

  const handleCounterAdd = () => {
    dispatch(increment())
    console.log("in Home increment")
  }

  const handleCounterDec = () => {
    dispatch(decrement())
    console.log("in Home decrement")
  }

  return (
    <div>
      <h2>HOME PAGE</h2>
      <button 
        onClick={() => dispatch(increment())}
        className='border-2 border-black m-10'
      >
        Counter Add
      </button>

      <button 
        onClick={() => dispatch(decrement())}
        className='border-2 border-black m-10'
      >
        Counter Dec
      </button>

      <div className='m-10'>
        <p>the counter is: </p>{counter}
      </div>
    </div>
  );
}

export default Home;
