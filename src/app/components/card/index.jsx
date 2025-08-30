import React from "react";
import Image from "next/image";

export default function CardFeatures({
  tittle,
  description,
  image,
  className = "",
  imageClassName = "",
  divClassName= "",
}) {
  return (
    <div
      className={`relative flex flex-col justify-between items-center p-4 rounded-[40px] border border-[#AAAAAA] bg-[linear-gradient(180deg,#E2E2E2_0%,#CECECE_100%)] ${className}`}
    >
      <div className={`space-y-2 ${divClassName}`}>
        <h3 className="text-[24px] md:text-[30px] font-semibold text-[#2B2B2B]">
          {tittle}
        </h3>
        <p className="normal text-[#666666] tex-[12px] text-base font-medium">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src={image}
          alt="image"
          className={`object-contain ${imageClassName}`}
        />
      </div>
    </div>
  );
}
