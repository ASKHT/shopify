import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import bannerimg1 from "../assets/banner-img/bannerImg1.webp";
import bannerimg2 from "../assets/banner-img/bannerImg2.webp";
import bannerimg3 from "../assets/banner-img/bannerImg3.webp";
import bannerimg4 from "../assets/banner-img/bannerImg4.webp";
import bannerimg5 from "../assets/banner-img/bannerImg5.webp";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Banner = () => {
    const imgarray = [bannerimg1, bannerimg2, bannerimg3, bannerimg4, bannerimg5];
    const [index, setIndex] = useState(0);
    const timeout=useRef(null)

   useEffect(()=>{
    function changebannerslide(){

        timeout.current= setTimeout(() => {
                 setIndex(index===imgarray.length-1?0:index+1)
                //  console.log(timeout.current)
        },2000)
    }
        //    changebannerslide();
   },[index])


    function forwardImage() {
        clearTimeout(timeout.current);
        if (index === imgarray.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }
    
    function backwardImage() {
        clearTimeout(timeout.current);
        if (index === 0) {
            setIndex(imgarray.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    return (
        <div className='relative flex items-center'>
            <FaChevronLeft className="absolute text-3xl left-2 text-gray-800" onClick={backwardImage} />
            <img src={imgarray[index]} alt='bannerimage' style={{width:"100%",height:"35rem"}}/>
            <FaChevronRight className="absolute text-3xl right-2 text-gray-800" onClick={forwardImage} />
           <div className="absolute flex left-[50%] bottom-[8px] gap-2"> 
            {imgarray.map((item,idx)=>(
           <div className={`bg-[#80c342] w-4 h-4 rounded-full items-center ${idx === index ? 'bg-white' : 'bg-[#80c342'}`} key={idx}></div>
          ))}</div>


        </div>
    );
};

export default Banner;
