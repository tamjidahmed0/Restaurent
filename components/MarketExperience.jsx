'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import market from '@/assets/market.png';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import callIcon from '@/assets/call-alt.png';
import packageIcon from '@/assets/package.png';
import bagIcon from '@/assets/bag.png';
import medalIcon from '@/assets/medal.png';

const MarketExperience = () => {
  const { ref: marketRef, inView: marketInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: featureRef, inView: featureInView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-[1144.03px] lg:h-[864px] flex items-center justify-center"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-[330px] h-[1080.03px] lg:h-[460px] lg:w-[1320px] flex flex-col gap-[50px]"
      >
        <div className="w-full h-[756.03px] lg:h-[460px] flex flex-col lg:flex-row lg:justify-between gap-[32px]">
          <motion.div
            ref={marketRef}
            initial={{ x: -50 }}
            animate={{ x: marketInView ? 0 : -50 }}
            transition={{ duration: 1 }}
          >
            <Image src={market} alt="market" className="lg:w-[617px] lg:h-[460px]" />
          </motion.div>

          <Tabs defaultValue="about" className="flex flex-col gap-[32px]">
            <TabsList className="flex gap-[16px] border-b border-[#B52B1D] text-black rounded-none justify-between lg:justify-start">
              <TabsTrigger className="py-[6px] px-[16px]" value="about">
                About
              </TabsTrigger>
              <TabsTrigger className="py-[6px] px-[16px]" value="experience">
                Experience
              </TabsTrigger>
              <TabsTrigger className="py-[6px] px-[16px]" value="contact">
                Contact
              </TabsTrigger>
            </TabsList>

            <TabsContent
              ref={aboutRef}
              value="about"
              className="flex flex-col gap-[32px] lg:w-[624px] lg:h-[402px]"
            >
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : -10 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[330px] h-[144px] lg:w-[624px] lg:h-[124px] text-[40px] lg:text-[62px] lg:leading-[62px] font-bebas leading-[48px]"
              >
                Exceptional culinary experience and delicious food
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: aboutInView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="w-[330px] h-[182px] text-[16px] lg:w-[624px] lg:h-[104px] leading-[26px] font-roboto"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 20 }}
                transition={{ duration: 1, delay: 1 }}
                className="w-full h-[48px] flex justify-between lg:justify-start gap-[32px]"
              >
                <button className="w-[149px] h-[48px] lg:w-[161px] lg:h-[56px] lg:text-[17px] lg:leading-[24px] py-[12px] px-[24px] bg-[#FEBF00] uppercase text-[14px] leading-[24px] font-roboto font-bold">
                  about more
                </button>

                <button className="w-[167px] h-[48px] lg:w-[204px] lg:h-[56px] lg:text-[18px] lg:leading-[24px] uppercase text-[16px] leading-[24px] font-roboto font-bold">
                  <div className="flex items-center gap-[8px] text-[14px] leading-[24px] font-roboto font-bold">
                    <Image src={callIcon} alt="call" className="w-[17.07px] h-[17.11px]" />
                    <h1>+88 3426 739 485</h1>
                  </div>
                </button>
              </motion.div>
            </TabsContent>

            <TabsContent
              ref={experienceRef}
              value="experience"
              className="flex flex-col gap-[32px] lg:w-[624px] lg:h-[402px]"
            >
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: experienceInView ? 1 : 0, y: experienceInView ? 0 : -10 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[330px] h-[144px] lg:w-[624px] lg:h-[124px] text-[40px] lg:text-[62px] lg:leading-[62px] font-bebas leading-[48px]"
              >
                Exceptional culinary experience and delicious food
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: experienceInView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="w-[330px] h-[182px] text-[16px] lg:w-[624px] lg:h-[104px] leading-[26px] font-roboto"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: experienceInView ? 1 : 0, y: experienceInView ? 0 : 20 }}
                transition={{ duration: 1, delay: 1 }}
                className="w-full h-[48px] flex justify-between lg:justify-start gap-[32px]"
              >
                <button className="w-[149px] h-[48px] lg:w-[161px] lg:h-[56px] lg:text-[17px] lg:leading-[24px] py-[12px] px-[24px] bg-[#FEBF00] uppercase text-[14px] leading-[24px] font-roboto font-bold">
                  about more
                </button>

                <button className="w-[167px] h-[48px] lg:w-[204px] lg:h-[56px] lg:text-[18px] lg:leading-[24px] uppercase text-[16px] leading-[24px] font-roboto font-bold">
                  <div className="flex items-center gap-[8px] text-[14px] leading-[24px] font-roboto font-bold">
                    <Image src={callIcon} alt="call" className="w-[17.07px] h-[17.11px]" />
                    <h1>+88 3426 739 485</h1>
                  </div>
                </button>
              </motion.div>
            </TabsContent>




            <TabsContent
              ref={contactRef}
              value="contact"
              className="flex flex-col gap-[32px] lg:w-[624px] lg:h-[402px]"
            >
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : -10 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[330px] h-[144px] lg:w-[624px] lg:h-[124px] text-[40px] lg:text-[62px] lg:leading-[62px] font-bebas leading-[48px]"
              >
                Exceptional culinary experience and delicious food
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: contactInView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="w-[330px] h-[182px] text-[16px] lg:w-[624px] lg:h-[104px] leading-[26px] font-roboto"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : 20 }}
                transition={{ duration: 1, delay: 1 }}
                className="w-full h-[48px] flex justify-between lg:justify-start gap-[32px]"
              >
                <button className="w-[149px] h-[48px] lg:w-[161px] lg:h-[56px] lg:text-[17px] lg:leading-[24px] py-[12px] px-[24px] bg-[#FEBF00] uppercase text-[14px] leading-[24px] font-roboto font-bold">
                  about more
                </button>

                <button className="w-[167px] h-[48px] lg:w-[204px] lg:h-[56px] lg:text-[18px] lg:leading-[24px] uppercase text-[16px] leading-[24px] font-roboto font-bold">
                  <div className="flex items-center gap-[8px] text-[14px] leading-[24px] font-roboto font-bold">
                    <Image src={callIcon} alt="call" className="w-[17.07px] h-[17.11px]" />
                    <h1>+88 3426 739 485</h1>
                  </div>
                </button>
              </motion.div>
            </TabsContent>

            {/* Other Tab Contents */}
          </Tabs>
        </div>

        <motion.div
          ref={featureRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: featureInView ? 1 : 0, y: featureInView ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full h-[224px] flex flex-col lg:flex-row gap-[32px]"
        >
          {[packageIcon, medalIcon, bagIcon].map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: featureInView ? 1 : 0, y: featureInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              className="w-full h-[70px] flex gap-[16px]"
            >
              <div className="w-[70px] h-[70px] shadow-custom-soft flex items-center justify-center rounded-full">
                <Image src={icon} alt="icon" className="w-[31.11px] h-[31.11px]" />
              </div>
              <div className="flex flex-col gap-[2px]">
                <h1 className="uppercase font-bebas text-[24px] leading-[36px] text-[#0A1425]">feature title</h1>
                <p className="font-[18px] leading-[26px] font-inter">Grab your food order</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MarketExperience;
