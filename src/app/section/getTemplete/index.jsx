import React from "react";
import Image from "next/image";
import Button from "../../components/button";
import started from "../../asset/svg/started.svg";

export default function GetTemplate() {
  return (
    <div className="container mx-auto md:mx-8 lg:mx-12 relative bg-[linear-gradient(180deg,#000000_0%,#444444_100%)] rounded-[40px] lg:rounded-[40px] w-[90%] h-[556px] lg:h-[656px] overflow-hidden">
      <div className="flex flex-col justify-between h-full px-6 lg:px-16 text-center">
        {/* Top content */}
        <div className="z-10 flex flex-col justify-center items-center">
          <h1 className="text-[32px] md:text-[48px] lg:text-[56px] mt-10 text-[#EFEFEF] font-bold max-w-4xl leading-tight">
            Take Control of Your Finances with Investor AI
          </h1>
          <p className="text-[14px] text-base font-medium md:font-semibold text-[#AAAAAA] mt-4">
            Join thousands of smart investors using AI to make faster & sharper
            decisions
          </p>

          <div className="w-full flex flex-col md:flex-row flex-wrap justify-center gap-6 pt-6">
            <Button className="bg-[#EFEFEF] text-black text-[16px] md:text-[18px] font-medium cursor-pointer px-6 py-3 rounded-[8px] hover:bg-black hover:text-white">
              Get Started - it's free
            </Button>
            <Button className="border border-[#EFEFEF] text-white text-[16px] md:text-[18px] cursor-pointer font-medium px-6 py-3 rounded-[8px] hover:bg-white hover:text-black">
              Get Template
            </Button>
          </div>
        </div>

        {/* Image at bottom */}
        <div className="flex justify-center">
          <Image src={started} alt="Get Started" className="h-[250px]" />
        </div>
      </div>
    </div>
  );
}
