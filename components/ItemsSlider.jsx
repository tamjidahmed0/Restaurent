'use client'
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import burger from '@/assets/burger.png'
import pizza from '@/assets/pizza.png'
import franch from '@/assets/franch.png'
import chicken from '@/assets/chicken.png'


import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
import { CaretLeft, CaretRight } from '@phosphor-icons/react';


const ItemsSlider = () => {


    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);
  


    useEffect(() => {
        if (!api) return;

       
        setCurrent(api.selectedScrollSnap() );

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap() );
        };

        api.on("select", handleSelect);

        // Cleanup listener on unmount
        return () => {
            api.off("select", handleSelect);
        };
    }, [api]);








    return (
        <div className=' w-full h-[532px] lg:h-[710px] bg-[#FBF7F2] flex flex-col justify-center items-center'>

            <div className='w-[330px] h-[468px] lg:w-full lg:h-[710px] flex flex-col lg:justify-center lg:items-center gap-[30px] lg:gap-[60px]'>
                <div className='w-full h-[82px] lg:w-[1320px] lg:h-[110px] flex flex-col gap-[8px] lg:relative lg:gap-[32px]'>
                    <p className=' text-[16px] font-roboto leading-[26px] font-bold text-[#BD1F17] lg:text-[20px] lg:leading-[32px]'>■ Crispy, Every Bite Taste</p>
                    <h1 className=' uppercase font-bebas font-bold text-[40px] leading-[48px] lg:text-[62px] lg:leading-[62px]'>POPULAR FOOD ITEMS</h1>


                    <div className="  gap-[21.33px] justify-center lg:absolute lg:top-1/2 transform -translate-y-1/2 right-0 hidden lg:flex ">
                        <button onClick={()=> api?.scrollTo(current - 1 )} className=" w-[40px] h-[40px] bg-white p-[15px] rounded-full shadow-custom-soft font-semibold text-[30px] flex items-center justify-center text-[#0A1425]">
                        <CaretLeft size={32} />
                        </button>

                        <button onClick={()=> api?.scrollTo(current + 1 )} className=" w-[40px] h-[40px] bg-white p-[15px] rounded-full shadow-custom-soft font-semibold text-[30px] flex items-center justify-center text-[#0A1425]">
                        <CaretRight size={32} />
                        </button>
                    </div>
                </div>

                {/* slider div*/}
                <div className='w-full lg:w-[1320px] h-[356px] flex flex-col gap-[16px]'>


                    <Carousel setApi={setApi} opts={{loop:true}} plugins={[
                           Autoplay({
                            delay: 3000,
                          }),
                    ]}>
                        <CarouselContent>
                            <CarouselItem className="md:basis-1/2 lg:basis-[370px]">
                                <div className="flex-[0_0_330px]  w-[330px] h-[300px] bg-white flex flex-col items-center justify-center text-lg font-semibold p-[32px]">
                                    <div className='flex flex-col items-center gap-[24px]'>
                                        <Image src={burger} alt='burger' />
                                        <div className=' w-[57px] bg-[#BD1F17] h-[4px]' />

                                        <div className='flex flex-col items-center'>
                                            <h1 className=' uppercase font-bebas font-normal text-[24px] text-[#0A1425] leading-[36px]'>vegetables burger</h1>
                                            <p className=' text-[16px] font-inter font-normal text-[#0A1425]'>Barbecue Italian cuisine pizza</p>
                                        </div>
                                    </div>

                                </div>

                            </CarouselItem>


                            <CarouselItem className="md:basis-1/2 lg:basis-[370px]">

                            <div className="flex-[0_0_330px]  w-[330px] h-[300px] bg-white flex flex-col items-center justify-center text-lg font-semibold p-[32px]">
                                <div className='flex flex-col items-center gap-[24px]'>
                                    <Image src={pizza} alt='burger' />
                                    <div className=' w-[57px] bg-[#BD1F17] h-[4px]' />

                                    <div className='flex flex-col items-center'>
                                        <h1 className=' uppercase font-bebas font-normal text-[24px] text-[#0A1425] leading-[36px]'>vegetables burger</h1>
                                        <p className=' text-[16px] font-inter font-normal text-[#0A1425]'>Barbecue Italian cuisine pizza</p>
                                    </div>
                                </div>

                            </div>
                            </CarouselItem>

                            <CarouselItem className="md:basis-1/2 lg:basis-[370px]">

                            <div className=" flex-[0_0_330px]  w-[330px] h-[300px] bg-white flex flex-col items-center justify-center text-lg font-semibold p-[32px]">
                                <div className='flex flex-col items-center gap-[24px]'>
                                    <Image src={franch} alt='burger' />
                                    <div className=' w-[57px] bg-[#BD1F17] h-[4px]' />

                                    <div className='flex flex-col items-center'>
                                        <h1 className=' uppercase font-bebas font-normal text-[24px] text-[#0A1425] leading-[36px]'>vegetables burger</h1>
                                        <p className=' text-[16px] font-inter font-normal text-[#0A1425]'>Barbecue Italian cuisine pizza</p>
                                    </div>
                                </div>

                            </div>
                            </CarouselItem>


                            <CarouselItem className="md:basis-1/2 lg:basis-[370px]">
                            <div className=" flex-[0_0_330px]  w-[330px] h-[300px] bg-white flex flex-col items-center justify-center text-lg font-semibold p-[32px]">
                                <div className='flex flex-col items-center gap-[24px]'>
                                    <Image src={chicken} alt='burger' />
                                    <div className=' w-[57px] bg-[#BD1F17] h-[4px]' />

                                    <div className='flex flex-col items-center'>
                                        <h1 className=' uppercase font-bebas font-normal text-[24px] text-[#0A1425] leading-[36px]'>vegetables burger</h1>
                                        <p className=' text-[16px] font-inter font-normal text-[#0A1425]'>Barbecue Italian cuisine pizza</p>
                                    </div>
                                </div>

                            </div>
                            </CarouselItem>

                        </CarouselContent>

                    </Carousel>





                    <div className="flex  gap-[21.33px] justify-center lg:hidden">
                        <button onClick={()=> api?.scrollTo(current - 1 )} className=" w-[40px] h-[40px] bg-white p-[15px] rounded-full shadow-custom-soft font-semibold text-[30px] flex items-center justify-center text-[#0A1425]">
                        <CaretLeft size={32} />
                        </button>

                        <button onClick={()=> api?.scrollTo(current + 1 )} className="  w-[40px] h-[40px] bg-white p-[15px] rounded-full shadow-custom-soft font-semibold text-[30px] flex items-center justify-center text-[#0A1425]">
                        <CaretRight size={32} />
                        </button>
                    </div>

                </div>




            </div>

        </div>
    )
}

export default ItemsSlider