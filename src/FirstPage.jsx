import React, { useState } from 'react'

const FirstPage = () => {
    const [sliderValue,setsliderValue] = useState(50);
    const handleChange = (e) => {
        setsliderValue(e.target.value);
    }
    const translateDistance = (sliderValue) * 2.3;
  return (
    <div className='flex flex-row'>
        
        <div className='m-24'>
        <h1>Input Slider</h1>
        <input type="range" min="1" max="100" value={sliderValue} onChange={handleChange} className="w-64 h-2 mt-10 bg-gray-300 rounded-full outline-none" />
        </div>
        <div style={{ transform: `translateX(${translateDistance}px)` }} className="absolute  pt-2 pr-[2px] w-11 h-10 rounded-lg mt-24 ml-24 bg-blue-500">
    <h1 className='ml-1 absolute transform translate-x-2 '>{sliderValue}</h1>
</div>

    </div>
  )
}

export default FirstPage