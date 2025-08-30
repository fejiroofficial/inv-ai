import Hero from "./section/hero";
import Header from "./section/header";
import Features from "./section/Features";
import Pricing from "./section/pricing";
import FAQ from "./section/faq";
import Testimonial from "./section/testimonial";
import GetTemplete from "./section/getTemplete";
import Footer from "./section/footer";
import grid from "../app/asset/svg/grid.svg";
import Comparism from "./section/comparism";
import Process from "./section/process";
import WhyUs from "./section/whyUs";

export default function Home() {
  return (
    <>
      <div
        className=" relative bg-no-repeat bg-top bg-contain"
        style={{
          backgroundImage: `url(${grid.src})`,
        }}
      >
        <Header />
        <Hero />
      </div>

      <div className="bg-[#EFEFEF]">
      <WhyUs />
      <Process />
        <Features />
        <Pricing />
        <Testimonial />
        <Comparism />
        <FAQ />
        <GetTemplete />
        <Footer />
      </div>
    </>
  );
}
