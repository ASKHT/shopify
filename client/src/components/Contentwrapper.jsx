import React from 'react'
import Header from './Header'
import Feature from './homepage/Feature'
import Banner from './Banner'
import Deals from './homepage/Deals'
const Contentwrapper = () => {
  return (
    <div className='flex flex-col gap-2 '>
        <Header/>
        <Banner/>
        <Feature/>
        <Deals/>
       
    </div>
  )
}

export default Contentwrapper