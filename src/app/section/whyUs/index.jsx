import React from "react";
import TagLabel from "../../components/tagLabel";
import Image from "next/image";
import Line from "../../asset/svg/Line2.svg";
import Lady from "../../asset/svg/lady4.svg";

export default function Process() {
  return (
    <div
      className="py-16 px-6 lg:px-0 lg:w-[90%] md:w-full container lg:mx-12 mx-auto"
      id="process"
    >
      <div className="flex flex-col items-center md:px-4">
        <TagLabel text="Why Us" />
        <h2 className="text-center text-[#2B2B2B] max-w-2xl lg:max-w-3xl text-[32px] md:text-[40px] font-semibold mt-4">
          Tired of information overload and second-guessing every trade?
        </h2>
        <p className="text-base font-medium text-[#666666] text-center pt-4 max-w-[450px]">
          Most investors lack real-time insights, spend hours analyzing trends,
          or rely on outdated strategies. Investor AI solves this.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center pt-4 gap-8">
        <Image src={Line} alt="Line" />

        <div className="flex flex-col items-center justify-center gap-8">
          <Image src={Lady} alt="Lady" />
          <p className="text-[14px] md:text-base text-center font-medium max-w-[450px] text-[#666666]">
            “Investor AI feels like having a personal Wall Street analyst in my
            pocket. It's fast, smart, and actually helps me make better moves.”
          </p>
          <p className="text-[14px] md:text-base font-semibold text-[#2B2B2B]">
            -Jasmine O., Retail Investor
          </p>
        </div>
      </div>
    </div>
  );
}
