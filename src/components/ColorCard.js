import React, { useEffect, useState } from 'react'

function ColorCard() {
  let [tempArr,setTempArr]=useState([]);
  

  let generateDynamicColorCode=()=>{
    let colorCodeArr = [];
    for(let i=0;i<4;i++){
      colorCodeArr.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }
    setTempArr([...colorCodeArr])
  }

  useEffect(()=>{
    generateDynamicColorCode();
  },[])


  return (
    <div className='color-card'>
      {
        tempArr.map((ele,ind)=>(
          <div key={ind} className='subColor' style={{backgroundColor:ele}}>
            <span className='sub-color-name'>{ele}</span>
          </div>
        ))
      }
    </div>
  )
}

export default ColorCard

