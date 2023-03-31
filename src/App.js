import "./App.css";
import { useState } from 'react';
function App() {
  const[count,setCount]=useState(0);
  function decreaseHandler(){
    setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    <div className="items-center gap-10 w-[100vw] h-[100vh] bg-[#344151] flex justify-center flex-col">
      <div className="text-[#0398d4] font-medium text-xl">
        Incerement And Decrement
      </div>
      <div className="text-[25px] text-[#344151] py-3 rounded-sm flex bg-white gp-12 justify-center">
        <button className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl" onClick={decreaseHandler}>-</button>
        <div className="font-bold px-10 text-5xl">
          {count}
        </div>
        <button className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl" onClick={increaseHandler}>+</button>
      </div>
      <button onClick={resetHandler} className="px-5 bg-[#0398d4] rounded-sm text-white text-lg">Reset</button>
    </div>
  );
}

export default App;
