'use client'
import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import burger from  '@/assets/burger.png'
import pizza from '@/assets/pizza.png'
import franch from '@/assets/franch.png'
import chicken from '@/assets/chicken.png'




const PopularItems = () => {

    const [emblaRef, embla] = useEmblaCarousel({ loop: false, slidesToScroll: 1 });

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);


  return (
    <div className="w-full max-w-[1920px] h-auto min-h-[864px] px-[300px] py-[120px]  flex flex-col gap-[60px] bg-[#FBF7F2]">
 
 <div className="w-full max-w-[1320px]  flex   justify-between ">
   <div className=" flex flex-col gap-[18px]">
   <h1 className=" font-roboto font-bold text-[20px] text-[#BD1F17] leading-[32px]">Crispy, Every Bite Taste</h1>
   <p className=" font-bebas  text-[62px] leading-[62px] text-[#181818]">POPULAR FOOD ITEMS</p>
   </div>



    <div className="flex  gap-[32px]">
    <button  onClick={scrollPrev} className=" w-[60px] h-[60px] bg-white p-[15px] rounded-full shadow-custom-soft font-semibold text-[30px] flex items-center justify-center text-[#0A1425]">
      {'<'}
    </button>

    <button onClick={scrollNext} className=" w-[60px] h-[60px] bg-white p-[15px] rounded-full shadow-custom-soft font-semibold text-[30px] flex items-center justify-center text-[#0A1425]">
      {'>'}
    </button>
    </div>





</div>

<div className="">
<div className="relative w-full mx-auto">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-[32px]">
         
          <div className="embla__slide flex-[0_0_306px] w-[306px] h-[300px] bg-white flex flex-col items-center justify-center text-lg font-semibold p-[32px]">
                <div className='flex flex-col items-center gap-[24px]'>
                <Image src={burger} alt = 'burger'/>
                <div className=' w-[57px] bg-[#BD1F17] h-[4px]' />
               
                <div className='flex flex-col items-center'>
                <h1 className=' uppercase font-bebas font-normal text-[24px] text-[#0A1425] leading-[36px]'>vegetables burger</h1>
                <p className=' text-[16px] font-inter font-normal text-[#0A1425]'>Barbecue Italian cuisine pizza</p>
                </div>
                </div>

          </div>

         
        </div>

        
      </div>
  
 
    </div>
    </div>



  </div>
  )
}

export default PopularItems