import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarketExperience from "@/components/MarketExperience";
import ItemsSlider from "@/components/ItemsSlider";
import BookForm from "@/components/BookForm";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";





export default function Home() {
  return (
    <div>
<Header />
<Hero />
<MarketExperience />
<ItemsSlider />
<BookForm />
<Testimonial/>
<Footer />




    </div>
  );
}
