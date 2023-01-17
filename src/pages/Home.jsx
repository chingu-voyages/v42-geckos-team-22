import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from './../redux/slices/testSlice'

function Home() {

  const counter = useSelector(state => state.test.value)
  const dispatch = useDispatch();

  const handleCounterAdd = () => {
    dispatch(increment())
    console.log("in Home")
  }

  return (
    <div>
      <h2>HOME PAGE</h2>
      <button onClick={() => dispatch(increment())}>Counter Add</button>

      <div>
        <p>the counter is: </p>{counter}
      </div>
    </div>
  );
}

export default Home;
