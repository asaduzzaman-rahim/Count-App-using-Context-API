import React, { useContext } from "react";
import { counterContext } from "../MainContext";
// import Button from "./Button";

const CountButton = () => {
  const { count, setCount } = useContext(counterContext);

  const IncrementClick= ()=>{
    setCount(count+1)
  }
  const DecrementClick= ()=>{
    setCount(count-1)
  }

  return (
    <>
      <div className="h-[100px] w-[500px]  mx-auto  shadow-2xl bg-[#dddd] text-black rounded-2xl mt-20">
        <div className="flex justify-center gap-2 py-2">
            <button className="py-2 px-3 rounded-[10px] font-bold text-[14px] cursor-pointer shadow-2xl bg-green-400" onClick={IncrementClick} >Increment</button>
            <button className="py-2 px-3 rounded-[10px] font-bold text-[14px] cursor-pointer shadow-2xl bg-red-400" onClick={DecrementClick} >Decrement</button>
        </div>
      </div>
    </>
  );
};

export default CountButton;
