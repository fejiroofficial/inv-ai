import React from "react";
import Image from "next/image";
import tick from "../../asset/svg/greenTick.svg";

const PriceCard = ({
  title,
  amount,
  duration,
  description,
  listItems,
  buttonLabel,
  variant = "default",
}) => {
  const isWhiteVariant = variant === "white";

  const handleClick = () => {
    window.open("https://calendly.com/fejiro-gospel/consultation", "_blank");
  };

  return (
    <div
      className={`flex flex-col rounded-[44px] p-6 w-full lg:w-[312px] xl:w-[363px] text-start border border-[#ccc] transition-all duration-300
      ${
        isWhiteVariant
          ? "bg-[linear-gradient(179.96deg,#000000_0.03%,#444444_108.08%)] border border-b-0 border-[#AAAAAA] lg:h-[628px] -mt-6"
          : "bg-[linear-gradient(179.96deg,#E2E2E2_0.03%,#CECECE_108.08%)] border border-b-0 border-[#AAAAAA] lg:h-[580spx] mt-0"
      }`}
    >
      <div
        className={`space-y-3 inter-font ${
          isWhiteVariant ? "text-[#EFEFEF]" : "text-[#212121]"
        }`}
      >
        <h3 className="text-[14px] lg:text-[18px] font-medium ">{title}</h3>
        <p className={`text-[22px] lg:text-[40px] font-medium${isWhiteVariant ? 'text-[#AAAAAA]' : 'text-[#212121]' }`}>{amount}<span className="text-[18px] font-medium">/{duration}</span></p>
        <p
          className={`text-[13px] lg:text-[16px] font-medium ${
            isWhiteVariant ? "text-[#AAAAAA]" : "text-[#525252]"
          }`}
        >
          {description}
        </p>
        <button
          onClick={handleClick}
          className={`cursor-pointer w-full py-3 rounded-[16px] transition duration-300 text-[18px] ${
            isWhiteVariant
              ? "bg-white text-black hover:bg-black hover:text-white "
              : "bg-black text-white hover:bg-white hover:text-black"
          }`}
        >
          {buttonLabel}
        </button>
      </div>
      <div className="border-b border-[#666666] py-2"></div>
      <div
        className={`w-full space-y-3 inter-font ${
          isWhiteVariant ? "text-[#EFEFEF]" : "text-[#212121]"
        }`}
      >
        <h3 className="text-[16px] text-[#666666] font-medium pt-8">
          Features
        </h3>
        {listItems.map((item, index) => (
          <div key={index} className="flex gap-2 mb-6">
            <Image
              src={tick}
              alt="Tick icon"
              width={16}
              height={16}
            />
            <p className={`text-[13px] lg:text-[16px] font-medium`}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
