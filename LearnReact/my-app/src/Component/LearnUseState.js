import React, { useState } from 'react'

const LearnUseState = () => {
    let [age,setAge]=useState(21);

  return (
    <div>
        age is {age}
        <br></br>
        <button
        onClick={()=>{
          setAge(30);
        
        }}
        >
            Click me

        </button>

    </div>
  )
}

export default LearnUseState
