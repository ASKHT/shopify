import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex flex-row justify-around items-center   h-16 ">
       <div className="text-4xl font-extrabold tracking-wide cursor-pointer text-[#80c342]">
  <p>Shopify</p>
</div>
      <div className="flex flex-row relative">
          <input
          className="  w-96 border-2 border-[#80c342] h-12 rounded-3xl pl-12 " 
          type="text"
          placeholder="Type the product you want to search..."
        />
        <FaSearch className="w-6 h-6 text-slate-800  absolute right-5 top-3 cursor-pointer  " />
      </div>
        <div className="flex flex-row justify-between w-40 items-center cursor-pointer ">
            <FaUser className="w-6 h-6"/>
            <FaShoppingCart className="w-6 h-6"/>
            <button className="bg-[#80c342] hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
            </button>
        </div>
    </div>
  )
}

export default Header