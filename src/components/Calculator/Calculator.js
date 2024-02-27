import React, { useState } from 'react'
import './Calculator.css'
function Calculator() {
    let [val, setVal] = useState('');
    const handleNumber = (event) => {
        setVal(val + event.target.innerHTML);
    }
    const handleDelete = () => {
        setVal(val.toString().slice(0, -1))
    }
    return (
        <>
            <div className='calculator'>
                    <input type="text" value={val} placeholder='0'/>
                
                    <div>
                        <button onClick={() => setVal('')}>AC</button>
                        <button onClick={handleNumber}>%</button>
                        <button onClick={handleDelete}>DEL</button>
                        <button onClick={handleNumber}>/</button>
                    </div>
                    <div>
                        <button onClick={handleNumber}>7</button>
                        <button onClick={handleNumber}>8</button>
                        <button onClick={handleNumber}>9</button>
                        <button onClick={handleNumber}>*</button>
                    </div>
                    <div>
                        <button onClick={handleNumber}>4</button>
                        <button onClick={handleNumber}>5</button>
                        <button onClick={handleNumber}>6</button>
                        <button onClick={handleNumber}>-</button>
                    </div>
                    <div>
                        <button onClick={handleNumber}>1</button>
                        <button onClick={handleNumber}>2</button>
                        <button onClick={handleNumber}>3</button>
                        <button onClick={handleNumber}>+</button>
                    </div>
                    <div>
                        <button onClick={handleNumber}>00</button>
                        <button onClick={handleNumber}>0</button>
                        <button onClick={handleNumber}>.</button>
                        <button onClick={() => setVal(eval(val))}>=</button>
                    </div>
            </div>

        </>
    )
}

export default Calculator
