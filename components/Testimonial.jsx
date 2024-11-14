'use client'
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import imageclient from '@/assets/Imageclient.png'
import vector2 from '@/assets/Vector2.png'

import {
    Carousel,
    CarouselContent,
    CarouselItem,

} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

import { CaretLeft, CaretRight } from '@phosphor-icons/react';


const Testimonial = () => {


    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);



    useEffect(() => {
        if (!api) return;


        setCurrent(api.selectedScrollSnap());

        const handleSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on("select", handleSelect);

        // Cleanup listener on unmount
        return () => {
            api.off("select", handleSelect);
        };
    }, [api]);




    return (
        <div className=' max-w-full lg:w-[1920px] h-[861.95px] lg:h-[965.97px] bg-[#FBF7F2] flex flex-col  gap-[8px] items-center'>
            <div className='w-[330px] lg:w-[1320px] lg:h-[965.97px]  h-[861.95px] flex flex-col justify-evenly gap-[8px] '>

                {/* heading */}
                <div className='w-full h-[138px] flex flex-col gap-[18px]  lg:w-[1320px] lg:h-[110px] lg:relative'>
                    <p className=' text-[16px] font-roboto leading-[26px] font-bold text-[#BD1F17] lg:text-[20px] lg:leading-[32px]'>■ Crispy, Every Bite Taste</p>
                    <h1 className=' uppercase font-bebas font-bold text-[40px] leading-[48px] lg:text-[62px] lg:leading-[62px]'>What Some of my Customers Say</h1>


                    <div className="  gap-[21.33px] justify-center lg:absolute lg:top-1/2 transform -translate-y-1/2 right-0 hidden lg:flex ">
                        <button onClick={() => api?.scrollTo(current - 1)} className=" w-[40px] h-[40px] bg-white p-[15px] rounded-full shadow-custom-soft font-semibold text-[30px] flex items-center justify-center text-[#0A1425]">
                            <CaretLeft size={32} />
                        </button>

                        <button onClick={() => api?.scrollTo(current + 1)} className=" w-[40px] h-[40px] bg-white p-[15px] rounded-full shadow-custom-soft font-semibold text-[30px] flex items-center justify-center text-[#0A1425]">
                            <CaretRight size={32} />
                        </button>
                    </div>
                </div>

                {/* end heading */}




                {/* slider */}
                <div className='w-full lg:w-[1320px] lg:h-[555.97px] h-[639.95px] flex flex-col  '>

                    <Carousel setApi={setApi} opts={{ loop: true }} plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}>
                        <CarouselContent>
                            <CarouselItem>

                                <div className=" flex-[0_0_1320px] w-full h-[639.95px] lg:flex lg:flex-row-reverse lg:justify-between">
                                    <div className='w-full h-[240px] lg:w-[763.6px] lg:h-[555.97px] bg-blue-300'>
                                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/kRCH8kD1GD0?si=jzz2wy_6WmNnBqf5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    </div>

                                    <div className='relative w-full h-[335.95px] lg:w-[556.45px] lg:h-[555.69px] bg-[#FEBF00] flex flex-col items-center justify-center '>

                                        <div className=' w-[280px] h-[285.95px] lg:w-[386.19px] lg:h-[411.95px]  flex flex-col justify-between'>

                                            <div className='relative w-full h-[188px] lg:w-full lg:h-[190px]  flex flex-col items-end justify-end'>

                                                <div className=' absolute text-[59.93px] font-bebas font-normal left-0 top-0'>
                                                    <h1>“</h1>
                                                </div>

                                                <div className='w-[261.07px] h-[168px] lg:w-[359.92px]'>
                                                    <h1 className='text-[18px] leading-[28px] font-roboto text-[#0A1425] lg:text-[20px] lg:leading-[34px]'>You can&apos;t go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</h1>
                                                </div>

                                            </div>

                                            <div className='w-full   flex flex-col items-end '>
                                                <div className='w-full h-[57.95px] lg:w-[360.75px] flex flex-col'>
                                                    <div className='  w-[360.75px h-[57.95px] flex justify-between  border-b border-black'>
                                                        <div className=' flex flex-col gap-[3px]'>
                                                            <h1 className=' font-bebas text-[18px] font-bold leading-[19.98px] capitalize' >Khalid Al Dawsry</h1>
                                                            <p className=' text-[14px] leading-[13.32px] text-[#333333]'>Jeddah, Saudi</p>
                                                        </div>

                                                        <div className=' flex flex-col justify-between'>
                                                            <Image src={imageclient} alt='image' width={39.62} height={39.95} />
                                                            <div className='w-[40.45px] h-[2px] bg-[#BD1F17]' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>




                                        </div>

                                        <div className=' absolute left-0 bottom-0 w-[24.64px] h-[49.29px] lg:w-[39.05px] lg:h-[76.98px] lg:bottom-10'>
                                            <Image src={vector2} alt='vector2' />
                                        </div>







                                    </div>


                                </div>



                            </CarouselItem>



                            <CarouselItem>
                                <div className="flex-[0_0_1320px] w-full h-[639.95px] lg:flex lg:flex-row-reverse lg:justify-between">
                                    <div className='w-full h-[240px] lg:w-[763.6px] lg:h-[555.97px] bg-blue-300'>
                                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/kRCH8kD1GD0?si=jzz2wy_6WmNnBqf5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    </div>

                                    <div className='relative w-full h-[335.95px] lg:w-[556.45px] lg:h-[555.69px] bg-[#FEBF00] flex flex-col items-center justify-center '>

                                        <div className=' w-[280px] h-[285.95px] lg:w-[386.19px] lg:h-[411.95px]  flex flex-col justify-between'>

                                            <div className='relative w-full h-[188px] lg:w-full lg:h-[190px]  flex flex-col items-end justify-end'>

                                                <div className=' absolute text-[59.93px] font-bebas font-normal left-0 top-0'>
                                                    <h1>“</h1>
                                                </div>

                                                <div className='w-[261.07px] h-[168px] lg:w-[359.92px]'>
                                                    <h1 className='text-[18px] leading-[28px] font-roboto text-[#0A1425] lg:text-[20px] lg:leading-[34px]'>You can&apos;t go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</h1>
                                                </div>

                                            </div>

                                            <div className='w-full   flex flex-col items-end '>
                                                <div className='w-full h-[57.95px] lg:w-[360.75px] flex flex-col'>
                                                    <div className='  w-[360.75px h-[57.95px] flex justify-between  border-b border-black'>
                                                        <div className=' flex flex-col gap-[3px]'>
                                                            <h1 className=' font-bebas text-[18px] font-bold leading-[19.98px] capitalize' >Khalid Al Dawsry</h1>
                                                            <p className=' text-[14px] leading-[13.32px] text-[#333333]'>Jeddah, Saudi</p>
                                                        </div>

                                                        <div className=' flex flex-col justify-between'>
                                                            <Image src={imageclient} alt='image' width={39.62} height={39.95} />
                                                            <div className='w-[40.45px] h-[2px] bg-[#BD1F17]' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>




                                        </div>

                                        <div className=' absolute left-0 bottom-0 w-[24.64px] h-[49.29px] lg:w-[39.05px] lg:h-[76.98px] lg:bottom-10'>
                                            <Image src={vector2} alt='vector2' />
                                        </div>







                                    </div>


                                </div>
                            </CarouselItem>

                        </CarouselContent>

                    </Carousel>




                    <div className="  flex  gap-[21.33px] justify-center lg:hidden -mt-8 z-0">
                        <button onClick={() => api?.scrollTo(current - 1)} className=" w-[40px] h-[40px] bg-white p-[15px] rounded-full shadow-custom-soft font-semibold text-[30px] flex items-center justify-center text-[#0A1425]">
                            <CaretLeft size={32} />
                        </button>

                        <button onClick={() => api?.scrollTo(current + 1)} className=" w-[40px] h-[40px] bg-white p-[15px] rounded-full shadow-custom-soft font-semibold text-[30px] flex items-center justify-center text-[#0A1425]">
                            <CaretRight size={32} />
                        </button>
                    </div>

                </div>

                {/* end slider */}

            </div>



        </div>
    )
}

export default Testimonial