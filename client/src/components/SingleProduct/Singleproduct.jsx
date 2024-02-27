import React from 'react'
import monitor from "../../assets/banner-img/monitor.png"
import shoes from "../../assets/banner-img/shoes.png"
const Singleproduct = () => {
    const imagearray=[1,2,3,4,5,6]
    const title="New 2022 from zpunet"
    const description="Providing information about the product to the prospective customer is only one reason a seller includes a description of the product. Product descriptions are also used to entice a potential customer to purchase the product. The fact is, great product descriptions lead to more sales. There are a plethora of items and services vying for the attention of the consumer. Even if a buyer searches online for a specific item, the choices available can be overwhelming. A well-written product description can stand out from the crowd and convert a potential customer into an actual customer. Therefore, by crafting impactful product descriptions, a company or individual can increase their sales."
  return (
 <div className="flex gap-7 ml-2 p-4">
     <div className="w-[30%] h-[28rem] border-2 border-[#F3FBF7] bg-[#F3FBF7]  flex justify-center">
        
        <img src={shoes} alt="monitor"className="w-[20rem] h-[20rem]"/>
       
    </div>
    <div className='w-[70%] flex flex-col justify-evenly '>
        
        <b className="text-4xl text-justify">{title}</b>
        <b className='text-4xl'>Price:Rs42000</b>
        <p className="text-xl text-justify text-[#0f0c0cb5]"><b>Description</b>:{description}</p>
    </div>
   </div>
  )
}

export default Singleproduct