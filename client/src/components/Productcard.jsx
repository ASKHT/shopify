import React from 'react'
import monitor from "../assets/banner-img/monitor.png"
const Productcard = () => {
  return (
  
        <div className='w-[300px] h-[322px] border-2 mb-2 mr-6'>
        <img src={monitor} alt="monitor image"/>
          <div className="flex justify-around ">
            <p>Price</p>
            <p>42000</p>
          </div>
        </div>
   
  )
}

export default Productcard