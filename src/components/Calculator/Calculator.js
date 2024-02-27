import React,{useState} from 'react'

function Calculator() {
    let [val,setVal]=useState('');
    const handleNumber =(event)=>{
        setVal(val+ event.target.innerHTML);
    }
  return (
    <>
    <div>
        <input type="text" value={val}/>
        <div>
            <button onClick={setVal('')}>AC</button>
            <button onClick={setVal(val.slice(0, -1))}>DEL</button>
        </div>
        <div>
            <button onClick={handleNumber}>+</button>
            <button onClick={handleNumber}>-</button>
            <button onClick={handleNumber}>*</button>
            <button onClick={handleNumber}>/</button>
            <button onClick={setVal(eval(val))}>=</button>
        </div>
        <div>
            <button onClick={handleNumber}>0</button>
            <button onClick={handleNumber}>1</button>
            <button onClick={handleNumber}>2</button>
            <button onClick={handleNumber}>3</button> 
            <button onClick={handleNumber}>4</button>
            <button onClick={handleNumber}>5</button>
            <button onClick={handleNumber}>6</button>
            <button onClick={handleNumber}>7</button>
            <button onClick={handleNumber}>8</button>
            <button onClick={handleNumber}>9</button>
        </div>
    </div>
      
    </>
  )
}

export default Calculator
