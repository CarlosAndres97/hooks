import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);
  const increment = (value=2)=>{
    setCounter(counter + value);
  }
  const decrement = ()=>{
    setCounter(counter - 1);
  }
  const reset = ()=>{
    setCounter(initialValue); 
  }
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
