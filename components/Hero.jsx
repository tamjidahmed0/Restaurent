'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import image1 from '@/assets/image1.png';
import offer from '@/assets/Offer.png';
import vector from '@/assets/Vector.png';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='h-[715.1px] lg:h-[939px] lg:justify-center w-full bg-custom-gradient-hero bg-blend-overlay  flex flex-col lg:flex-row items-center justify-between py-[32px] px-[30px]'
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className='w-[330px] h-[292.2px] lg:w-[1373.5px] lg:h-[649px] lg:relative flex flex-col lg:items-center gap-[48px] lg:gap-0 justify-between lg:flex-row'
      >
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className=" lg:w-[946px] lg:h-[446px] lg:absolute lg:z-10 lg:flex lg:flex-col lg:gap-[30px] lg:justify-between w-[330px] h-[292.2px] flex flex-col gap-[32px]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:w-[830px] lg:h-[272px] lg:bg-custom-gradient"
          >
            <h1 className='w-[330px] h-[112px] text-[48px] font-bebas leading-[56px] text-white lg:text-[120px] lg:leading-[130px] lg:w-[945px] lg:h-[252px]'>
              Taste the authentic Saudi cuisine
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className='w-[330px] h-[84px] lg:w-[559px] lg:h-[64px] text-[20px] leading-[28px] text-white lg:text-[24px] lg:leading-[32px]'
          >
            Among the best Saudi chefs in the world, serving you something beyond flavor.
          </motion.p>

          <motion.button
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className='w-[152.8px] h-[48.2px] bg-[#FEBF00] py-[13.6px] px-[20.4px] uppercase font-roboto font-bold text-[15.3px] leading-[20.4px]'
          >
            explore more
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className='w-[330px] h-[292.2px] lg:w-[751.5px] lg:h-[649px]  lg:absolute right-0 relative'
        >
          <Image src={image1} alt="image" className="lg:w-[700px] lg:h-[649px]" />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-[72px] h-[72px] lg:w-[120px] lg:h-[120px] rounded-full bg-[#FEBF00] flex items-center justify-center absolute right-[7px] bottom-[10px]"
          >
            <Image src={offer} alt="offer" className="w-[63.4px] h-[63.4px] lg:w-[105.66px] lg:h-[105.66px]" />
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Image src={vector} alt="vector" className="absolute -top-5 right-0 lg:right-8 lg:-top-10" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
