import React from "react";
import Image from "next/image";
import X from "../../asset/social/x_logo.svg";
import instagram from "../../asset/social/instagram.svg";
import linkdln from "../../asset/social/linkdln.svg";
import INV from "../../asset/svg/INV.AI.svg";
import logo from "../../asset/svg/INV.AI (1).svg";

export default function Footer() {
  return (
    <>
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 lg:gap-0">
          <Image src={logo} alt="logo" className="w-[120px] lg:w-[150px] h-[50px]" />

          <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-4 xl:gap-6">
            <p className="text-[14px] md:text-base lg:text-[18px] font-semibold cursor-pointer underline">
              Features
            </p>
            <p className="text-[14px] md:text-base lg:text-[18px] font-semibold cursor-pointer underline">
              How it Works
            </p>
            <p className="text-[14px] md:text-base lg:text-[18px] font-semibold cursor-pointer underline">
              Pricing
            </p>
            <p className="text-[14px] md:text-base lg:text-[18px] font-semibold cursor-pointer underline">
              FAQs
            </p>
            <p className="text-[14px] md:text-base lg:text-[18px] font-semibold cursor-pointer underline">
              Contact Us
            </p>
          </div>

          <div className="flex gap-6 md:gap-4 lg:gap-6 items-end">
            <Image
              src={X}
              alt="x-icon"
              height={10}
              width={15}
              className="w-[25px] lg:w-[30px] h-[22px] lg:h-[26px] cursor-pointer"
            />
            <Image
              src={instagram}
              alt="facebook-icon"
              className="w-[25px] lg:w-[30px] h-[22px] lg:h-[26px] cursor-pointer"
            />
            <Image
              src={linkdln}
              alt="linkedin-icon"
              className="w-[25px] lg:w-[30px] h-[22px] lg:h-[26px] cursor-pointer"
            />
          </div>
        </div>

        <div className="text-center pt-4">
          <h3 className="text-[#626262] text-[16px] font-medium">
            Copyright DesignOrah-Udoka
          </h3>
        </div>
      </div>
      <div className="w-full overflow-hidden px-2">
        <Image src={INV} alt="INV" className="w-full" />
      </div>
    </>
  );
}
