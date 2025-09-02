import Image from "next/image";
import React from "react";
import hero from "../../asset/svg/hero.svg";
import dashboard from "../../asset/svg/dashboard.svg";
import Button from "../../components/button";
import piggy from "../../asset/header/piggy.svg";
import axa from "../../asset/header/axa.svg";
import flutter from "../../asset/header/flutter.svg";
import talent from "../../asset/header/talentQL.svg";
import kora from "../../asset/header/kora.svg";
import enyanta from "../../asset/header/enyanta.svg";
import Line from "../../asset/svg/Line 114.svg";

const heroData = [
  {
    count: "12M+",
    description: "data-backed decisions processed and optimized",
  },
  {
    count: "300K+",
    description: "Users streamline their investment strategies",
  },
  {
    count: "97%",
    description: "Rated highly for trust, accuracy, and ease of use",
  },
];

export default function Hero() {
  return (
    <main className="flex flex-col justify-between flex-1 items-center text-center pb-16 px-6 lg:px-0 lg:w-[90%] md:w-full container lg:mx-12 mx-auto pt-24 md:pt-26 lg:pt-20">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[40px] md:text-[56px] font-bold max-w-[750px] leading-tight">
            Invest Smarter, Not Harder
            <span className="inline md:hidden"> with AI</span>
          </h1>

          <div className="hidden md:flex flex-row items-center justify-center gap-2">
            <span className="text-[40px] md:text-[56px] font-bold max-w-[650px] leading-tight">
              with AI
            </span>
            <Image src={hero} alt="hero" height={50} className="" />
          </div>

          <Image
            src={hero}
            alt="hero"
            height={50}
            className="block md:hidden"
          />
        </div>

        <p className="text-[14px] md:text-base text-[#666666] font-semibold">
          Invest AI is your AI-powered investing team, built to help you trade
          with confidence, clarity, and speed.
        </p>

        <Button className="bg-black w-[208px] lg:w-[230px] text-[#F9F9F9] text-[14px] md:text-base font-semibold border border-[#666666] normal px-6 py-3 rounded-[8px]">
          Get Started - It’s Free!
        </Button>

        <p className="text-[12px] md:text-[14px] text-[#666666] font-medium">
          No credit card. No guesswork. Just smarter investing.
        </p>

        <Image src={dashboard} alt="hero" />
      </div>

      <footer className="w-full lg:w-[70%] md:mt-20 flex flex-col items-center gap-2 mt-8 overflow-scroll">
        <h4 className="text-[16px] font-medium mb-2">Trusted by:</h4>
        <div className="relative w-full overflow-x-scroll">
          <div className="flex gap-[24px] lg:gap-[40px] justify-center items-center whitespace-nowrap lg:w-full animate-scroll">
            {[
              piggy,
              flutter,
              axa,
              kora,
              talent,
              piggy,
              flutter,
              axa,
              kora,
              talent,
              enyanta,
            ].map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Company ${index}`}
                width={150}
                height={40}
                className="w-[120px] lg:w-[225px] h-[40px]"
              />
            ))}
          </div>
        </div>
      </footer>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
        {heroData.map((item, index) => (
          <div key={index} className="flex flex-col items-center  relative">
            <p className="text-[#2B2B2B] text-[32px] md:text-[40px] font-semibold">
              {item.count}
            </p>
            <p className="text-[14px] md:text-base font-medium text-[#666666]">
              {item.description}
            </p>

            {index !== heroData.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
                <Image src={Line} alt="Line" />
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
