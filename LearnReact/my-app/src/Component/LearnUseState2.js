import React, { useState } from 'react'

const LearnUseState2 = () => {
    let [counter, setCounter]=useState(0);
  return (
    <div>
        counter is{counter}
        <br></br>
        <button
            onClick={()=>{
                setCounter(counter+1);
            }}
         >
            Increment
        </button>
        <button 
        onClick={()=>{
            setCounter(counter-1);
        }}>
            Decrement
            </button>      
    </div>
  )
}

export default LearnUseState2
