import React,{useState} from 'react';

const Counter=()=>{
  const [count, setCount] =useState(0)
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    setCount(count-1)
  }
  return <>
    <button onClick={decrement}>-</button>
    <h1>Count:{count}</h1>
    <button onClick={increment}>+</button>
  </>

}

export default Counter