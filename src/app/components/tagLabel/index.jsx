import React from "react";

const TagLabel = ({ text }) => {
  return (
    <div className="flex justify-center items-center border border-[#CCCCCC] rounded-[33px] bg-[#E2E2E2] px-6 py-2 max-w-fit mx-auto">
      <p className="normal text-center text-[#212121]">
        {text}
      </p>
    </div>
  );
};

export default TagLabel;
