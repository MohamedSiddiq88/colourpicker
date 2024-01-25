import React from 'react'

function ColorCard() {
  let tempArr=[];
  tempArr.length=4;
  tempArr.fill(0);
  let generateDynamicColorCode=()=>{
    let colorCode = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return colorCode;
  }
  return (
    <div className='color-card'>
      {
        tempArr.map((ele,ind)=>(
          <div key={ind} className='subColor' style={{backgroundColor:generateDynamicColorCode()}}>

          </div>
        ))
      }
    </div>
  )
}

export default ColorCard

