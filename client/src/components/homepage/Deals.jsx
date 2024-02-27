import React from 'react'
import Productcard from '../Productcard'
const Deals = () => {
    const arr=[1,2,3,4,5]

    return ( 
      <div  >
          <p className="text-3xl font-extrabold">Deals of the Day</p>
            <br/>
         <div className="flex justify-center items-center">
         {arr.map((item,idx)=>(
             <Productcard key={idx}/>
          ))}
         </div>
        
      </div>
  )
}

export default Deals