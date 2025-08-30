import React from "react";
import Image from "next/image";

const ComparisonCard = ({
  items = [],
  showButton = true,
  buttonLabel,
  borderColor = "#AAAAAA",
  textColor = "text-gray-800",
  className = "",
  showDivider = true,
  img,
}) => {
  return (
    <div
      className={`w-full max-w-lg rounded-2xl p-6 md:p-8 border ${className}`}
      style={{ borderColor }}
    >
      <ul className="space-y-6">
        {items.map((text, idx) => (
          <li key={idx} className="flex items-start py-2 gap-3">
            <Image
              className="flex items-center"
              src={img}
              alt="Tick icon"
              width={16}
              height={16}
            />
            <div className="flex-1">
              <p
                className={`text-sm md:text-base text-[#2B2B2B] font-normal leading-relaxed ${textColor}`}
              >
                {text}
              </p>

              {/* Show divider except for last item */}
              {showDivider && idx !== items.length - 1 && (
                <div
                  className="mt-2"
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0 0 1px 0",
                    borderImageSource:
                      "linear-gradient(90deg, rgba(102, 102, 102, 0) 0%, #666666 50%, rgba(102, 102, 102, 0) 100%)",
                    borderImageSlice: 1,
                  }}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
      {showButton && (
        <button className="bg-black text-white mt-6 hover:bg-white hover:text-black cursor-pointer w-full py-3 rounded-[16px] transition duration-300 text-[18px] ">
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default ComparisonCard;
