'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import group from '@/assets/Group.png'
import Link from "next/link"
import menu from '../assets/menu2.png'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"




const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full h-[77px] xl:h-[108px] ${scrolled ? 'bg-custom-gradient-hero' : ' bg-custom-gradient-hero bg-blend-overlay'} sticky top-0 z-50 flex justify-between items-center py-[20px] px-[30px] xl:py-[32px] xl:px-[300px] transition-all duration-300 ease-in-out`}>
      <div className="flex gap-[60px]">
        <div className="flex items-center space-x-[6px]">
          <Image src={group} alt="logo" />
          <span className="text-[24.44px] leading-[24.44px] font-poppins text-white">Restaurant</span>
        </div>

        <nav className="hidden lg:flex items-center gap-[40px] font-raleway text-white text-[14px]">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/clients">Clients</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>

      <div className={`lg:hidden `} onClick={() => setIsOpen(true)}>
        <Image src={menu} alt="menu" />
      </div>


      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild></SheetTrigger>
        <SheetContent side="right" className="bg-black text-white p-4">
          <SheetHeader>
            <SheetTitle>
              <div className="flex items-center space-x-[6px]">
                <Image src={group} alt="logo" />
                <span className="text-[24.44px] leading-[24.44px] font-poppins text-white">Restaurant</span>
              </div>
            </SheetTitle>
            <div>
              <nav className="flex flex-col gap-4 font-raleway text-[14px]">
                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                <Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
                <Link href="/clients" onClick={() => setIsOpen(false)}>Clients</Link>
                <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              </nav>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>


      <div className="hidden lg:block">
        <button className="px-[16px] lg:px-[24px] py-[8px] lg:py-[10px] bg-[#FEBF00] font-roboto text-[14px] lg:text-[15px]">
          BOOK A TABLE
        </button>
      </div>
    </div>
  );
}

export default Header;
