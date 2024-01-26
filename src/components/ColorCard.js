import React, { useEffect, useState } from 'react'

function ColorCard() {
  let [tempArr,setTempArr]=useState([]);
  let [isCopy,setIsCopy]=useState(false);  

  let generateDynamicColorCode=()=>{
    let colorCodeArr = [];
    for(let i=0;i<4;i++){
      colorCodeArr.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }
    setTempArr([...colorCodeArr])
  }

  let copyMe=(ele)=>{
    window.navigator.clipboard.writeText(ele);
    setIsCopy(true);
    setTimeout(()=>setIsCopy(false),1000)
  }

  useEffect(()=>{
    generateDynamicColorCode();
  },[])


  return (
    <div className='color-card'>
      {
        tempArr.map((ele,ind)=>(
          <div key={ind} className='subColor' style={{backgroundColor:ele}} onClick={()=>copyMe(ele)}>
            <span className='sub-color-name' style={{backgroundColor:isCopy?'black':'#0000009b'}}>{isCopy?'Copied':ele}</span>
          </div>
        ))
      }
    </div>
  )
}

export default ColorCard

