import Image from "next/image";
import { Navbar } from "@/components";
import { HomePage } from "@/components";
import { Slide } from "@/components";
import { SliderImage } from "@/components";
import { RetailersSlide } from "@/components";
import { ViewSlide } from "@/components";
import { ProductSlide } from "@/components";
import { SofaSlide } from "@/components";
import { Footer } from "@/components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Slide />
      <SliderImage />
      <RetailersSlide />
      <ViewSlide />
      <ProductSlide />
      <SofaSlide />
      <Footer />
    </div>
  );
}
