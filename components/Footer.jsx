import Image from "next/image"
import restaurant from '@/assets/restaurant.png'
import call from '@/assets/icons/call.png'
import clock from '@/assets/icons/clock.png'
import mail from '@/assets/icons/mail.png'
import map from '@/assets/icons/map.png'
import facebook from '@/assets/icons/Frame.png'
import x from '@/assets/icons/Frame1.png'
import insta from '@/assets/icons/Frame2.png'
import linked from '@/assets/icons/Frame3.png'


const Footer = () => {
    return (
        <div
            className="w-full h-[999px] lg:h-[719.45px] flex flex-col gap-[8px] bg-center bg-Footer-image bg-cover bg-no-repeat backdrop-blur-custom items-center justify-center"

        >



            <div className=" w-[330px] h-[939px] flex flex-col gap-[55px] lg:w-[1320px] lg:h-[479.45px] lg:items-center  ">
                <div className=" w-[330px] h-[144px] lg:w-[1320px] text-[40px] lg:text-[62px] lg:leading-[64px] leading-[48px] font-bebas uppercase text-center text-white">
                    <h1>We ready to have you the best dining experiences</h1>
                </div>

                <div className="w-full h-[616px] flex flex-col gap-[24px] lg:flex-row">
                    <div className="w-full h-[136px] flex items-center justify-center flex-col gap-[16px]">
                        <Image src={clock} alt="clock" />
                        <div className="flex flex-col items-center gap-[12px]">
                            <h1 className=" uppercase text-[24px] leading-[28px] font-bebas text-white">Opening hours</h1>
                            <p className="text-center text-[16px] leading-[25px] font-roboto text-[#F7F8F9]">Monday - Sunday<br />
                                9:00 AM to 11:30 PM</p>
                        </div>
                    </div>

                    <div className="w-full h-[136px] flex items-center justify-center flex-col gap-[16px]">
                        <Image src={call} alt="clock" />
                        <div className="flex flex-col items-center gap-[12px]">
                            <h1 className=" uppercase text-[24px] leading-[28px] font-bebas text-white">LET&apos;S TALK</h1>
                            <p className="text-center text-[16px] leading-[25px] font-roboto text-[#F7F8F9]">Phone: 1-800-222-4545 <br />Fax: 1-800-222-4545<br /></p>
                        </div>
                    </div>



                    <div className="w-full h-[136px] flex items-center justify-center flex-col gap-[16px]">
                        <Image src={mail} alt="clock" />
                        <div className="flex flex-col items-center gap-[12px]">
                            <h1 className=" uppercase text-[24px] leading-[28px] font-bebas text-white">BOOK A TABLE</h1>
                            <p className="text-center text-[16px] leading-[25px] font-roboto text-[#F7F8F9]">Email: demo@website.com<br />Support: support@website.com</p>
                        </div>
                    </div>


                    <div className="w-full h-[136px] flex items-center justify-center flex-col gap-[16px]">
                        <Image src={map} alt="clock" />
                        <div className="flex flex-col items-center gap-[12px]">
                            <h1 className=" uppercase text-[24px] leading-[28px] font-bebas text-white">our address</h1>
                            <p className="text-center text-[16px] leading-[25px] font-roboto text-[#F7F8F9]">123 Stree New York City , United <br /> States Of America.</p>
                        </div>
                    </div>




                </div>



                <div className="w-full h-[71px] flex justify-center items-center flex-col gap-[16px] lg:gap-[25px] text-center">
                    <div className="w-[194px] h-[36px] flex gap-[16.16px] lg:w-[285.82px] lg:h-[53.45px]">
                        <Image src={facebook} alt="facebook" className="w-[36px] h-[36px] lg:w-[53.45px] lg:h-[53.45px]" />
                        <Image src={x} alt="x" className="w-[36px] h-[36px] lg:w-[53.45px] lg:h-[53.45px]" />
                        <Image src={insta} alt="insta" className="w-[36px] h-[36px] lg:w-[53.45px] lg:h-[53.45px]" />
                        <Image src={linked} alt="linked" className="w-[36px] h-[36px] lg:w-[53.45px] lg:h-[53.45px]" />


                    </div>
                    <p className="text-[16px] font-roboto leading-[18.75px] text-white lg:text-[21px] lg:leading-[24.61px]">© 2023 All Rights Reserved </p>
                </div>

            </div>



        </div>
    )
}

export default Footer