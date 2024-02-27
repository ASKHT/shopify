import React from 'react'
import Productcard from './Productcard'
import Header from './Header'

const Productlist = () => {
  return (
   <>
   <Header/>
      <div className="w-full bg-[black] h-1"></div>
     <section className="flex gap-4 mt-8 ml-7">
          <div className='border-2 w-[18rem] flex flex-col gap-3 h-[34rem]  p-4 mt-16'>
       <div> <b>Brand</b></div>
      
     <div className="flex flex-col gap-3 ">
        <div className="flex gap-2">
            <input type="checkbox" />
             <p>Puma</p>
        </div>
        <div className="flex gap-2">
            <input type="checkbox" />
             <p>Adidas</p>
        </div>
        <div className="flex gap-2">
            <input type="checkbox" />
             <p>Reebok</p>
        </div>
        <div className="flex gap-2">
            <input type="checkbox" />
             <p>UnderArmour</p>
        </div>
        <div className="flex gap-2">
            <input type="checkbox" />
             <p>Asics</p>
        </div>
        <hr className="border-b-1 border-black" />
            <div>
                <b>Price</b>
                <input type="range" className='w-60' />
                <div className="flex gap-2">
                    <input type="text" className='w-[50px] h-[30px] border-2 border-[black]  text-center'placeholder='Min' />
                    <input type="text" className='w-[50px] h-[30px] border-2 border-[black] text-center' placeholder='Max'/>
                </div>
            </div>
            <hr className="border-b-1 border-black" />
           <div>
            <b>Rating</b>
            <div className="flex gap-3">
                <input type="checkbox" />
                <p>4 &#9733; and Above</p>
            </div>
            <div className="flex gap-3">
                <input type="checkbox" />
                <p>3 &#9733; and Above</p>
            </div>
            <div className="flex gap-3">
                <input type="checkbox" />
                <p>2 &#9733; and Above</p>
            </div>
            <div className="flex gap-3">
                <input type="checkbox" />
                <p>1 &#9733; and Above</p>
            </div>
           </div>
        </div>
      
         
    </div>
    <div className='w-full flex flex-col gap-9'>
            <div className='flex justify-between w-[80%]'>
                <p>You are viewing (1-3)pages</p>
                
                   <div className="flex"> 
                    <p>Sort By:</p>
                    <select  className='border-2 border-[black]'>
                    <option >--Please choose an option--</option>
                    <option value="popularity">Popularity</option>
                    <option value="what's new">What's new</option>
                    <option value="sort by price">Sort by Price</option>
                    <option value="sort by category">Sort by category</option>
                    </select>
                    </div>
            </div>
            <div className='flex flex-wrap'>
                <Productcard/>
                <Productcard/>
                <Productcard/>
                <Productcard/>
                <Productcard/>
                <Productcard/>
                <Productcard/>
                <Productcard/>
                <Productcard/>
            </div>
         </div>
     </section>
   </>
  )
}

export default Productlist