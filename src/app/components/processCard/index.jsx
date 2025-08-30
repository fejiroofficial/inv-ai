import React from "react";

const index = ({ num, title, description }) => {
  return (
    <div className="bg-[#E2E2E2] border-[0.5px] border-[#AAAAAA] rounded-3xl">
      {/* <div className="bg-[#F9F9F9] flex flex-row gap-2 rounded-full px-6 md:px-3 lg:px6 py-2 md:py-2 lg:py-4">
        <div className="bg-[#2B2B2B] h-8 md:h-10 w-8 md:w-10 rounded-full text-center p-1">
          <p className="text-[#F9F9F9] text-base md:text-[24px] font-bold">
            {num}
          </p>
        </div>
        <p className="text-[#2B2B2B] text-[20px] lg:text-[24px] font-semibold">
          {title}
        </p>
      </div> */}
      <div
        className="bg-[#F9F9F9] flex flex-row items-center gap-2 rounded-full md:h-14 lg:h-16 px-6 md:px-3 lg:px-6 md:py-3"
      >
        <div className="bg-[#2B2B2B] h-8 md:h-10 w-8 md:w-10 rounded-full flex items-center justify-center">
          <p className="text-[#F9F9F9] text-base md:text-[24px] font-bold">
            {num}
          </p>
        </div>
        <p className="text-[#2B2B2B] text-[20px] lg:text-[24px] font-semibold">
          {title}
        </p>
      </div>

      <p className="text-[#666666] text-[14px] md:text-base font-medium px-4 py-8 md:py-4 lg:py-8">
        {description}
      </p>
    </div>
  );
};

export default index;
